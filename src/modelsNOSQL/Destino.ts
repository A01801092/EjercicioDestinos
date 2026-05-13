import { ModelOptions, prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        collection: 'destinos',
        timestamps: false //agregar dos atributos createdAt y updatedAt
    }
})

export class Destino {
    @prop({required: true, trim: true})
    public ciudad!: string;
    @prop({required: true, trim: true})
    public pais!: string;
    @prop({required: true, trim: true})
    public clima_predominante!: string;
}

export const DestinoModel = getModelForClass(Destino);