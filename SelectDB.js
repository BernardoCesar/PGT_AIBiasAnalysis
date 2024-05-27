const db = require('./DataBase');

// Função para consultar todos os registros
async function consultarTodos() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM DadosImagens", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// Função para consultar registros baseados em um prompt específico
function consultarPorPrompt(prompt) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM DadosImagens WHERE prompt = ?", [prompt], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

execute()

async function execute(){
    console.log(await consultarTodos())
}
