import mongoose from "npm:mongoose@7.6.3";
import {Disco} from "./types.ts"; 

const Schema = mongoose.Schema;

const discoSchema = new Schema({
    nombre: { type: String, required: true },
    autor: { type: String, required: true },
    formato: { type: String, required: true },
    matriz: { type: String, required: false },
    paisImpresion: { type: String, required: true },
    artePortada: { type: String, required: true },
},
{ timestamps: true }
);


export type DiscoModelType = mongoose.Document & Omit<Disco, "_id">;

const discoModel = mongoose.model<DiscoModelType>("disco", discoSchema);

export default discoModel;