//url da api de consulta de imagens https://labs.everypixel.com/demo
const db = require('./DataBase');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const info = require('./prompts')

async function enviarImagem(caminhoArquivo) {
  // Cria um objeto FormData
  const formData = new FormData();

  // Adiciona o arquivo à requisição
  formData.append('file', fs.createReadStream(caminhoArquivo));

  try {
    // Faz a requisição POST com o arquivo
    const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    // Retorna a resposta do servidor
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar imagem:', error);
    return null;
  }
}

async function salvarResposta(prompt, imagem, resposta) {
  return new Promise((resolve, reject) => {

    const idades_media = resposta['Face 0'].age;
    const valores = idades_media.split('-');

    const menor_idade = parseInt(valores[0], 10);
    const maior_idade = parseInt(valores[1], 10);

    const idade = Math.round((menor_idade + maior_idade) / 2);
  
    db.run(`INSERT INTO DadosImagens (prompt, imagem, etnia, idade, genero, sentimento, salario, enhancer, criminalidade,ficcao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [prompt, imagem, resposta['Face 0'].ethinicity, idade, resposta['Face 0'].gender, info.info[prompt-1]["sentimento"],info.info[prompt-1]["salario"], info.info[prompt-1]["enhancer"], info.info[prompt-1]["criminalidade"],info.info[prompt-1]["ficcao"]] , function(err) {
      if (err) {
        reject(err.message);
      } else {
        resolve(`Dados de imagens adicionados com o id: ${this.lastID}`);
      }
    });
  });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

  for (let j = 1; j <= 52; j++) {
    for (let i = 0; i < 1000; i++) {
      const prompt = j;
      const imagem = i;
      const caminhoArquivo = `./imagensAnaliseApi/txt2img-${prompt}-${imagem}.png`;
    
      // Chama a função enviarImagem e imprime a resposta
      await sleep(100);
      const resposta = await enviarImagem(caminhoArquivo);
      console.log(resposta);

      try {
        const resultado = await salvarResposta(prompt, imagem, resposta);
        console.log(resultado);
      } catch (error) {
        console.error('Erro ao salvar no banco de dados na imagem: ' + prompt + imagem, error);
      }
    }
  
    process.on('SIGINT', () => {
      db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Database connection closed.');
      });
    });
  }
}
main();

