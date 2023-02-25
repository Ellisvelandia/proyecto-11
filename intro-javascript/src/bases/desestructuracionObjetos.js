const persona = {
  nombre: "Ellis",
  edad: 29,
  clave: "Ironman",
};

const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);

const uses = ({ clave, nombre, edad, rango = "Capitan" }) => {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latLng: {
      lat: 22.211,
      lng: 33.554,
    },
  };
};

const {
  nombreClave,
  anios,
  latLng: { lat, lng },
} = uses(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
