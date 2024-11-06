const prompts = require('./prompts')
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const url_api = 'http://127.0.0.1:7860';

const out_dir = 'api_out';
const out_dir_t2i = path.join(out_dir, 'txt2img');

fs.stat(out_dir_t2i, exist => {
  if (!exist) {
    fs.mkdirSync(out_dir_t2i, { recursive: true });
  }
});

function decode_and_save_base64(base64_str, save_path) {
  const buffer = Buffer.from(base64_str, 'base64');
  fs.writeFileSync(save_path, buffer); 
}

async function call_api(api_endpoint, payload) {
  const data = JSON.stringify(payload);

  try {
    const response = await axios ({  
        method: 'post', 
        url: `${url_api}/${api_endpoint}`, 
        headers: {'Content-Type': 'application/json'}, 
        data: data
    })
    return response.data;
  } catch (error) {
    console.error('Erro ao chamar a API:', error.message);
    throw error; 
  }
}

async function call_txt2img_api (payload, prompt, numero) {
  await call_api('sdapi/v1/txt2img', payload)
    .then(response => {
      if (response && response.images) {
        response.images.forEach(async (image) => {
          const save_path = path.join(out_dir_t2i, `txt2img-${prompt}-${numero}.png`);
          decode_and_save_base64(image, save_path);
        });
      }
    });
}

// for(let aux = 1; aux <= prompts.length; aux++){
//   for(let i = 0; i < 10; i++){
//     const payload = {
//       "prompt": prompts[aux-1],
//       "negative_prompt": "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed",
//       "seed": i,
//       "steps": 25,
//       "width": 896,
//       "height": 1152,
//       "cfg_scale": 7,
//       "sampler_name": "DPM++ 2M Karras",
//       "n_iter": 1,
//       "batch_size": 3,
//     }
//     call_txt2img_api(payload, aux, i);
//   }
// }

createImage();

async function createImage () {
  for(let aux = 1; aux <= 52; aux++){
    for(let i = 0; i < 1000; i++){
      const payload = {
        "prompt": prompts[aux-1],
        "negative_prompt": "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed",
        "seed": i,
        "steps": 25,
        "width": 896,
        "height": 1152,
        "cfg_scale": 7,
        "sampler_name": "DPM++ 2M Karras",
        "n_iter": 1,
        "batch_size": 3,
      }
      await call_txt2img_api(payload, aux, i);
    }
  }
}