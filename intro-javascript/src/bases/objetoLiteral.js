const persona = {
  nombre: "crisanto",
  apellido: "Velandia",
  edad: 29,
  direccion: {
    ciudad: " Tolima",
    zip: 1100111,
    lat: 14.325,
    lng: 32.254,
  },
};

console.table(persona);
console.log({ persona });

const persona2 = { ...persona };
persona2.nombre = "Ellis";

console.log(persona);
console.log(persona2);
