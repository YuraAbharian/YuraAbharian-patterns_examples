
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `https://${this.ip}:80`;
  };
}


const server = new Server("Constructor", "82.21.21.32");
console.log(server.getUrl())