import { Request, Response } from "npm:express@4.18.2";
import discoModel from "./Disco.ts";

//-Actualizar un disco existente indicándolo por su id

const putDisco = async (req: Request, res: Response) => {
    try {
        const disco = req.body;

        if(!disco.id || !disco.nombre || !disco.autor || !disco.formato || !disco.matriz || !disco.paisImpresion || !disco.artePortada){
            res.status(404).send("Faltan campos");
            return;
        }
    

        const newDisco = await discoModel.findByIdAndUpdate(req.params.id, disco, {new: true}).exec();
        if(!newDisco){
            res.status(404).send("El disco no existe");
            return;
        }

        res.status(200).send({
            id: newDisco.id,
            nombre: newDisco.nombre,
            autor: newDisco.autor,
            formato: newDisco.formato,
            matriz: newDisco.matriz,
            paisImpresion: newDisco.paisImpresion,
            artePortada: newDisco.artePortada,
        });
    
        } catch (error) {
            res.status(500).send(error.message);
            return;
        }
        }

export default putDisco;