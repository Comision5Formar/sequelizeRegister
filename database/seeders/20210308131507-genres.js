'use strict';

let nombres = ["Acción","Comedia","Terror","Suspenso","Documental","Ciencia Ficción","Aventuras", "Animación","Infantiles","Musical","Fantasía","Drama"]

let generos = [];
let genero;

for (let index = 0; index < nombres.length; index++) {
  genero = {
    name : nombres[index],
    createdAt : new Date(),
    updatedAt : new Date()
  }
  generos.push(genero)
}


module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Genres', generos, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Genres', null, {});

  }
};
