const path = require('path');

//Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo
console.log(path.extname(__filename));

//Criar objeto Path
console.log(path.parse(__filename));

//Juntasr caminhos de arquivos
console.log(path.join(__dirname, 'test'));