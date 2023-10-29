import mongoose from "npm:mongoose@7.6.3";

export interface Disco {
    nombre: string;
    autor: string;
    formato: string;
    matriz?: string;
    paisImpresion: string;
    artePortada: string;
    _id: string;
  }
  