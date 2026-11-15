const { ask, close } = require("./consoleInput");

async function main() {
  try {
    const tipoEntrada = await ask("Tipo de vehiculo (1 = carro, 2 = moto): ");
    const minutosEntrada = await ask("Minutos de permanencia: ");
    const facturaEntrada = await ask("Tiene factura de compra? (S/N): ");

    if (tipoEntrada === undefined || minutosEntrada === undefined || facturaEntrada === undefined) {
      console.log("Entrada incompleta");
      return;
    }

    const tipo = Number(tipoEntrada);
    const minutos = Number(minutosEntrada);
    const factura = facturaEntrada.trim().toUpperCase();

    if (
      tipoEntrada.trim() === "" ||
      minutosEntrada.trim() === "" ||
      !Number.isInteger(tipo) ||
      !Number.isInteger(minutos)
    ) {
      console.log("El tipo y los minutos deben ser numeros enteros");
      return;
    }

    if (minutos < 0) {
      console.log("Los minutos no pueden ser negativos");
      return;
    }

    const tarifas = { 1: 4000, 2: 2000 };
    const tarifa = tarifas[tipo];

    if (tarifa === undefined) {
      console.log("Tipo de vehiculo no valido");
      return;
    }

    let valor = 0;
    if (minutos > 15) {
      const horas = Math.trunc((minutos - 1) / 60);
      valor = Math.min(horas * tarifa, 30000);

      if (factura === "S") {
        valor /= 2;
      }
    }

    console.log(`Valor a pagar: $${valor}`);
  } finally {
    close();
  }
}

main();
