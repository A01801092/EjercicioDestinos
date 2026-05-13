import express, {Request, Response} from 'express';
import AbstractController from '../controllers/AbstractController';
import { dbnosql } from '../modelsNOSQL';

class Server {
    //Atributos
    private app: express.Application;
    private port: number;
    private env: string;
    //Metodos constructores
    constructor(appInit:{port: number; env:string; middelwares: any[]; controllers: AbstractController[]}) {
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddelwares(appInit.middelwares);
        this.initControllers(appInit.controllers);
        this.connectDB();
    }
    //Metodos
    private initMiddelwares(middelwares: any[]): void {
        middelwares.forEach(middelware => {
            this.app.use(middelware);
        });
    }
    private initControllers(controllers: AbstractController[]): void {
        //Health Check
        this.app.get('/', (req: Request, res: Response) => {
            console.log('Health Check');
            res.send('Server is OK');
        });
        controllers.forEach(controller => {
            this.app.use("/"+controller.prefix, controller.router);
        });
    };
    private async connectDB(){
        try {
            await dbnosql.connect();
        } catch (err){
            console.log(err);
        }
    }
    public init(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port} in ${this.env} mode`);
            console.log('Server running on port ' + this.port + ' in ' + this.env + ' mode');
        })
    }
}

export default Server;