const { ask, close } = require("./consoleInput");

async function main() {
  try {
    const entrada = await ask("Digite el anio: ");

    if (entrada === undefined) {
      console.log("Entrada incompleta");
      return;
    }

    const anio = Number(entrada);

    if (entrada.trim() === "" || !Number.isInteger(anio)) {
      console.log("El anio debe ser un numero entero");
      return;
    }

    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
    console.log(esBisiesto ? `${anio} es bisiesto` : `${anio} no es bisiesto`);
  } finally {
    close();
  }
}

main();
