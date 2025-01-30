const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
        console.log('Mensagem recebida:', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Mensagem recebida com sucesso!');
    });
});

const PORT = 3000;
server.listen(PORT,'0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});
