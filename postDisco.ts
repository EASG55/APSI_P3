import { Request, Response } from "npm:express@4.18.2";
import discoModel from "./Disco.ts";

// -Crear nuevo disco

const postDisco = async (req: Request, res: Response) => {
  try {
    const {nombre, autor, formato, matriz, paisImpresion, artePortada,} = req.body;

    if(!nombre || !autor || !formato || !matriz || !paisImpresion || !artePortada){
      res.status(400).send("Faltan datos");
      return;
    }

    if(typeof nombre !== "string" || typeof autor !== "string" || typeof formato !== "string" || typeof matriz !== "string" || typeof paisImpresion !== "string" || typeof artePortada !== "string"){
      res.status(400).send("Los tipos de datos ingresados no son los correctos");
      return;
    }

    const yaExiste = await discoModel.findOne({nombre}).exec();
    if(yaExiste){
      res.status(400).send("El disco ya existe");
      return;
    }

    const newDisco = new discoModel({nombre, autor, formato, matriz, paisImpresion, artePortada,});
    await newDisco.save();

    res.status(200).send({
        id: newDisco.id.toString(),
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
    };

export default postDisco;