import { Request, Response } from "npm:express@4.18.2";
import discoModel from "./Disco.ts";

// 1) Obtener todos los discos existentes
// 2) Obtener un disco mediante id
// 3) Obtener listado de discos según nombre
// 4) Obtener listado de discos según formato
// 5) Obtener listado de discos según país de impresión

const getDisco = async (req: Request, res: Response) => {
  try{
    const discos = await discoModel.find().exec();
    if(!discos){
      res.status(404).send("Disco no encontrado");
      return;
    }
    res.status(200).send(discos.map((disco) => ({
      nombre: disco.nombre,
      autor: disco.autor,
      formato: disco.formato,
      matriz: disco.matriz,
      paisImpresion: disco.paisImpresion,
      artePortada: disco.artePortada,
      id: disco._id.toString(),

    })));
  } catch(error){
    res.status(404).send(error.message);
         return;
     }
}

const getDiscoById = async (req: Request, res: Response) => {
  try{
    const disco = await discoModel.findById(req.params.id).exec();
    if(!disco){
      res.status(404).send("Disco no encontrado");
      return;
    }
    res.status(200).send({
      nombre: disco.nombre,
      autor: disco.autor,
      formato: disco.formato,
      matriz: disco.matriz,
      paisImpresion: disco.paisImpresion,
      artePortada: disco.artePortada,
      id: disco._id.toString(),
    });
  } catch(error){
    res.status(404).send(error.message);
         return;
     }
}

const getDiscoByNombre = async (req: Request, res: Response) => {
  try{
    const nombre = req.params.nombre;

    const discos = await discoModel.find({nombre: nombre}).exec();
    if(!discos){
      res.status(404).send("Disco no encontrado");
      return;
    }
    res.status(200).send(discos.map((disco) => ({
      nombre: disco.nombre,
      autor: disco.autor,
      formato: disco.formato,
      matriz: disco.matriz,
      paisImpresion: disco.paisImpresion,
      artePortada: disco.artePortada,
      id: disco._id.toString(),

    })));
  } catch(error){
    res.status(404).send(error.message);
         return;
     }
}

const getDiscoByFormato = async (req: Request, res: Response) => {
  try{
    const discos = await discoModel.find({formato: req.params.formato}).exec();
    if(!discos){
      res.status(404).send("Disco no encontrado");
      return;
    }
    res.status(200).send(discos.map((disco) => ({
      nombre: disco.nombre,
      autor: disco.autor,
      formato: disco.formato,
      matriz: disco.matriz,
      paisImpresion: disco.paisImpresion,
      artePortada: disco.artePortada,
      id: disco._id.toString(),

    })));
  } catch(error){
    res.status(404).send(error.message);
         return;
     }
}

const getDiscoByPaisImpresion = async (req: Request, res: Response) => {
  try{
    const discos = await discoModel.find({paisImpresion: req.params.paisImpresion}).exec();
    if(!discos){
      res.status(404).send("Disco no encontrado");
      return;
    }
    res.status(200).send(discos.map((disco) => ({
      nombre: disco.nombre,
      autor: disco.autor,
      formato: disco.formato,
      matriz: disco.matriz,
      paisImpresion: disco.paisImpresion,
      artePortada: disco.artePortada,
      id: disco._id.toString(),

    })));
  } catch(error){
    res.status(404).send(error.message);
         return;
     }
}

export { getDisco, getDiscoById, getDiscoByNombre, getDiscoByFormato, getDiscoByPaisImpresion };
