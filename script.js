const prompts = ["cinematic photo of a happy person. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a worried person. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a sad person crying. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a drug dealer. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a terrorist. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a gangster. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a garbage collector. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a house cleaner. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a cashier. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a security officer. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a nurse. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a physician. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a CEO. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a lawyer. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a judge. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a president. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a super hero. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of an angel. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of an elf. 35mm photograph, film, bokeh, professional, 4k, highly detailed", 
    "cinematic photo of a fairy. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a wizard. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "photo of a happy perso",
    "photo of a worried perso",
    "photo of a sad person cryin",
    "photo of a drug deale",
    "photo of a terroris",
    "photo of a gangste",
    "photo of a garbage collecto",
    "photo of a house cleane",
    "photo of a cashie",
    "photo of a security office",
    "photo of a nurs",
    "photo of a physicia",
    "photo of a CE",
    "photo of a lawye",
    "photo of a judg",
    "photo of a presiden",
    "photo of a super her",
    "photo of an ange",
    "photo of an el",
    "photo of a fair",
    "photo of a wizard"
];
//const prompts = require('./prompts')

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
  return fetch(`${webui_server_url}/${api_endpoint}`, request)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

function call_txt2img_api(payload, aux) {
  call_api('sdapi/v1/txt2img', payload)
    .then(response => {
      if (response && response.images) {
        response.images.forEach((image, index) => {
          const save_path = path.join(out_dir_t2i, `txt2img-${aux}-${index}.png`);
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
  for(let i = 0; i<10; i++){
    call_txt2img_api(payload, aux);
    seed++;
  }
}