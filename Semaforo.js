const { ask, close } = require("./consoleInput");

async function main() {
  try {
    const entrada = await ask("Numero de inventario: ");

    if (entrada === undefined) {
      console.log("Entrada incompleta");
      return;
    }

    const inventario = Number(entrada);

    if (entrada.trim() === "" || !Number.isFinite(inventario)) {
      console.log("El inventario debe ser un numero");
    } else if (inventario < 0) {
      console.log("error");
    } else if (inventario === 0) {
      console.log("Rojo: agotado");
    } else if (inventario >= 1 && inventario <= 10) {
      console.log("Amarillo: pedir");
    } else if (inventario > 10) {
      console.log("Verde: pedir");
    } else {
      console.log("Opcion no valida");
    }
  } finally {
    close();
  }
}

main();
