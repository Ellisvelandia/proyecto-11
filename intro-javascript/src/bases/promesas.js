import { getHeroesById, getHeroesByOwner } from "../bases/importExport";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve();
//     const heroe = getHeroesById(2);
//     const owner = getHeroesByOwner("DC");
//     resolve(heroe, owner);
//   }, 2000);
// });

// promesa
//   .then((heroe, owner) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.log(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se puede encontrar al heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  // .then((heroe) => console.log(heroe))
  .then(console.log)
  // .catch((err) => console.log(err));
  .catch(console.warn);
