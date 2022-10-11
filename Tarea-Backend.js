const http = require('http');
const fsPromises = require('fs/promises')


let h = new Date();
let hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
let minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
let seconds = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

let horaActual =`${hours}:${minutes}:${seconds}`;

const server = http.createServer(async (request, response) => {
    if (request.url === '/'){
        try {
            await fsPromises.appendFile("./saludo.txt",`Hola soy Roberto y visitaste mi servidor a las ${horaActual}hs.\n`);
            response.write('acabaste de crear el archivo de texto "Saludo", leelo');
            response.end();
            
        } catch (error) {
            console.log(error);
        }
    }
})

server.listen(3000)
console.log('sevidor levantado')