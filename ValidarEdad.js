const { ask, close } = require("./consoleInput");

async function main() {
  try {
    const entrada = await ask("Ingrese su edad: ");

    if (entrada === undefined) {
      console.log("Entrada incompleta");
      return;
    }

    const edad = Number(entrada);

    if (entrada.trim() === "" || !Number.isInteger(edad)) {
      console.log("La edad debe ser un numero entero");
    } else if (edad < 0 || edad > 120) {
      console.log("Edad invalida");
    } else {
      console.log("Edad valida");
    }
  } finally {
    close();
  }
}

main();
