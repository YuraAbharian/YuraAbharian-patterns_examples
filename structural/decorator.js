class Server {
    constructor(ip, port){
        this.ip = ip;
        this.port = port;
    }
    get url(){
        return `https://${this.ip}: ${this.port}`
    }
}

function aws(server) {
    server.isAws = true;
    server.port = 4000;
    return server;
}
const newAws = aws(new Server('11.11.11.11', 3000));
console.log('AWS isAws: ', newAws.isAws);
console.log('AWS awsPort: ', newAws.port);

function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}
const newAzure =  azure(new Server('22.22.22.22', 8000));
console.log('AZURE isAzure: ', newAzure.isAzure);
console.log('AZURE azurePort: ', newAzure.port);