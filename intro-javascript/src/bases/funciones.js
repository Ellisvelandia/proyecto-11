const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar3);
console.log(saludar4);
console.log(saludar("Goku") + saludar2("vegeta"));

const getUser = () => ({
  uid: "ABC123",
  username: "El_xd150",
});

console.log(getUser());

// funcion flecha
// tiene que retornar un objeto implicito

const getUserActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUserActivo("ellis");
console.log(usuarioActivo);
