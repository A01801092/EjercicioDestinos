import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import { Destino, DestinoModel } from "../modelsNOSQL/Destino";

export default class DestinoController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance:DestinoController;
    //Métodos de clase
    public static get instance():DestinoController{
        return this._instance || 
        (this._instance = new this("Destino"));
    }
    //Metodo de instancia
    protected initRoutes(): void {
        this.router.get('/listarDestinos',
            this.getListarDestinos.bind(this));
        this.router.post('/crearDestino',
            this.postCrearDestino.bind(this));    
    }

    private async getListarDestinos(req:Request,res:Response):Promise<void>{
        //SELECT
        try{
            const destinos = await DestinoModel.find().sort({createdAt:-1});
            res.status(200).json(destinos);
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
        
    }
    private async postCrearDestino(req:Request,res:Response):Promise<void>{
        //CREATE
        try{
            console.log(req.body);
            await DestinoModel.create(req.body);
            res.status(200).json({message:"Registro de destino exitoso"});
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    }

}