declare class Server {
    private app;
    private port;
    private env;
    constructor(appInit: {
        port: number;
        env: string;
        middelwares: any[];
        controllers: any[];
    });
    private initMiddelwares;
    private initControllers;
    private connectDB;
    init(): void;
}
export default Server;
//# sourceMappingURL=Server.d.ts.map