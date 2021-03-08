'use strict';

const faker = require('faker')

let movies = []
let movie;

for (let index = 0; index < 50; index++) {
  
  movie = {
    title : faker.lorem.words(3),
    poster : faker.random.image(),
    rating : faker.random.float({min:1,max:10}),
    awards : faker.random.number({min:1,max:20}),
    release_date : faker.date.past(),
    synopsis : faker.lorem.words(12), 
    length : faker.random.number({min:90,max:150}),
    genreId: faker.random.number({min:1,max:12}),
    createdAt : new Date(),
    updatedAt : new Date()
  }
  movies.push(movie)
}


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Movies', movies, {});

 },

 down: async (queryInterface, Sequelize) => {

   await queryInterface.bulkDelete('Movies', null, {});

 }
};
