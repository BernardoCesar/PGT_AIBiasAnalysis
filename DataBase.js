const sqlite3 = require('sqlite3').verbose();

// Criar um novo banco de dados
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the local database.');
});

// Criar uma tabela
db.run(`CREATE TABLE IF NOT EXISTS DadosImagens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prompt INTEGER,
  imagem INTEGER,
  etnia TEXT,
  idade INTEGER,
  genero TEXT,
  sentimento INTEGER, 
  salario INTEGER,
  enhancer INTEGER,
  criminalidade INTEGER,
  ficcao INTEGER
)`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Table created or already exists.');
  }
});

// Exportar db para uso em outros módulos
module.exports = db;
