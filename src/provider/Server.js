"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    //Atributos
    app;
    port;
    env;
    //Metodos constructores
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddelwares(appInit.middelwares);
        this.initControllers(appInit.controllers);
        this.connectDB();
    }
    //Metodos
    initMiddelwares(middelwares) {
        middelwares.forEach(middelware => {
            this.app.use(middelware);
        });
    }
    initControllers(controllers) {
        //Health Check
        this.app.get('/', (req, res) => {
            console.log('Health Check');
            res.send('Server is OK');
        });
        controllers.forEach(controller => {
            this.app.use(controller);
        });
    }
    ;
    connectDB() {
    }
    init() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port} in ${this.env} mode`);
            console.log('Server running on port ' + this.port + ' in ' + this.env + ' mode');
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map