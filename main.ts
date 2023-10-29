import express , {Request, Response} from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

import {getDisco, getDiscoById, getDiscoByFormato, getDiscoByNombre, getDiscoByPaisImpresion} from "./getDisco.ts";
import postDisco from "./postDisco.ts";
import deleteDisco from "./deleteDisco.ts";
import putDisco from "./putDisco.ts";


const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");
console.log(MONGO_URL)

if (!MONGO_URL) {
  console.log("debes especificar la variable de entorno MONGO_URL");
  Deno.exit(1);
}

try {
  await mongoose.connect(MONGO_URL);
  console.log("Conexión hecha a MongoDB");

  const app = express();
  app.use(express.json());

  app.get("/discos", getDisco)
  app.get("/discos/:id", getDiscoById)
  app.get("/discos/nombre/:nombre", getDiscoByNombre)
  app.get("/discos/formato/:formato", getDiscoByFormato)
  app.get("/discos/paisImpresion/:paisImpresion", getDiscoByPaisImpresion)
  app.post("/discos", postDisco)
  app.delete("/discos/:id", deleteDisco)
  app.put("/discos/:id", putDisco)

  app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));
  

} catch (e) {
  console.error(e);
}

