const { ask, close } = require("./consoleInput");

async function main() {
  try {
    const edadEntrada = await ask("Cuantos anios tienes?: ");
    const respuestaEntrada = await ask("Aceptas los terminos y condiciones? (S/N): ");

    if (edadEntrada === undefined || respuestaEntrada === undefined) {
      console.log("Entrada incompleta");
      return;
    }

    const edad = Number(edadEntrada);
    const respuesta = respuestaEntrada.trim().toUpperCase();

    if (edadEntrada.trim() === "" || !Number.isInteger(edad)) {
      console.log("La edad debe ser un numero entero");
    } else if (edad >= 14 && respuesta === "S") {
      console.log("Registro exitoso");
    } else {
      console.log("No puedes registrarte");
    }
  } finally {
    close();
  }
}

main();
