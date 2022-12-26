import app from "./app.js";

import { SERVER_BD_PORT } from "./constants.js";


export async function main() {
  try {
    // await sequelize.sync({force: false}) //sincronización con la bd
    console.log("Connection has been established successfully.");
    app.listen(SERVER_BD_PORT, () => {
      console.log("Server is listening on port", SERVER_BD_PORT);
    });
    
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}


