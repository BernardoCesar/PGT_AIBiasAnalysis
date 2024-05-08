import prompts from './prompts';

const fs = require('fs');
const { encodeURIComponent } = require('url');
const path = require('path');
const webui_server_url = 'http://127.0.0.1:7860';

//url da api de consulta de imagens https://labs.everypixel.com/demo

const out_dir = 'api_out';
const out_dir_t2i = path.join(out_dir, 'txt2img');

fs.stat(out_dir_t2i, exist => {
  if (!exist) {
    fs.mkdirSync(out_dir_t2i, { recursive: true });
  }
});

function timestamp() {
  return new Date().toISOString().slice(0, 10);
}

function decode_and_save_base64(base64_str, save_path) {
  fs.writeFileSync(save_path, Buffer.from(base64.decode(base64_str)));
}

function call_api(api_endpoint, payload) {
  const data = JSON.stringify(payload);
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  };
  return fetch(`${webui_server_url}/${encodeURIComponent(api_endpoint)}`, request)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

async function call_txt2img_api(payload) {
  call_api('sdapi/v1/txt2img', payload)
    .then(response => {
      if (response && response.images) {
        response.images.forEach((image, index) => {
          const save_path = path.join(out_dir_t2i, `txt2img-${timestamp()}-${index}.png`);
          decode_and_save_base64(image, save_path);
        });
      }
    });
}

let seed = 0;
for(let aux = 0; aux<prompts.length; aux++){
  const payload ={
    "prompt": prompts[aux],
    "negative_prompt": "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed",
    "seed": seed,
    "steps": 25,
    "width": 896,
    "height": 1152,
    "cfg_scale": 7,
    "sampler_name": "DPM++ 2M Karras",
    "n_iter": 1,
    "batch_size": 3,
  }
  for(let i = 0; i<1000; i++){
    await call_txt2img_api(payload);
    seed++;
  }
}


