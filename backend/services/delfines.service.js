// import { Computadora } from "../models/Computadora.js";

export const DelfinesService = {
    getDelfines
};


async function getDelfines() {
    try {
      return "hola Lucio como estas";
  
    } catch (error) {
      console.log("Error obteniendo todos los delfines " + error);
    }
  }