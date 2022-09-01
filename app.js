const http = require("http");

const host = '127.0.0.1';
const port = 7100;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.send("Servico Interno!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
