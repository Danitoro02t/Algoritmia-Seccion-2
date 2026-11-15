# Ejercicios de algoritmos en JavaScript

Este repositorio reúne cinco programas de consola. Cada algoritmo se ejecuta por separado y solicita los datos que necesita. `consoleInput.js` contiene la rutina compartida para leer respuestas de la consola.

## Requisitos

- Node.js instalado.

## Cómo ejecutar

Abre una terminal en esta carpeta y ejecuta el programa que quieras probar:

```bash
node Parqueadero.js
node Semaforo.js
node ValidarEdad.js
node ValidarRegistro.js
node anio_.js
```

## Descripción de los programas

- **Parqueadero.js**: calcula el cobro según el tipo de vehículo y el tiempo. Los primeros 15 minutos no tienen costo; después, cuenta las horas con `Math.trunc((minutos - 1) / 60)`. La tarifa es de $4000 para carro y $2000 para moto. El cobro máximo es $30000 y una factura marcada con `S` aplica un descuento del 50%.
- **Semaforo.js**: relaciona el inventario con un estado: negativo muestra un error, cero indica agotado, de 1 a 10 sugiere pedir y más de 10 muestra el estado verde.
- **ValidarEdad.js**: considera válida una edad entera entre 0 y 120, inclusive.
- **ValidarRegistro.js**: permite registrarse a partir de los 14 años si se aceptan los términos con `S` (no distingue entre mayúsculas y minúsculas).
- **anio_.js**: determina si un año es bisiesto: debe ser divisible por 4, excepto los divisibles por 100, a menos que también sean divisibles por 400.

Los programas informan cuando una entrada numérica no es válida. Para estacionamiento, el dato de factura se trata como afirmativo solo si se escribe `S`.
