const nombre = "Ellis";
const apellido = "Velandia";

// const nombreCompleto = nombre + "" + apellido;
const nombreCompleto = `Mi nombre es ${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
  return "hola" + nombre;
}

console.log(`Este es un saludo ${getSaludo(nombre)}`);
