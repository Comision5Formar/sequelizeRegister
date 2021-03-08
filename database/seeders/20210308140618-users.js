'use strict';

const bcrypt = require('bcrypt');

let users = [];
let user = {
  name : "admin",
  email : "admin@fullmovies5.com",
  pass : bcrypt.hashSync('123123',12),
  rol : "admin",
 createdAt : new Date(),
 updatedAt : new Date()
}
users.push(user)

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
