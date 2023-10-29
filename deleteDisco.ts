import { Request, Response } from "npm:express@4.18.2";
import discoModel from "./Disco.ts";

//-Eliminar un disco mediante su id

const deleteDisco = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        
        if(!id){
            res.status(400).send("Falta el id");
            return;
        }

        const disco = await discoModel.findByIdAndDelete(id).exec();
        if(!disco){
            res.status(404).send("El disco no existe");
            return;
        }

        res.status(200).send("disco con id " + id + " eliminado");

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
    }

export default deleteDisco;