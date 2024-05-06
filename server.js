const path = require('path');
const moduleAlias = require('module-alias');

// Definir o caminho absoluto para a pasta 'src'
const srcPath = path.join(__dirname, 'src');

// Adicionar alias para os módulos na pasta 'src'
moduleAlias.addAlias('@app', srcPath);

const app = require('@app/app.js');

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));