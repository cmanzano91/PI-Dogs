const {Temperament,Dog} = require('../src/db.js');

module.exports = {
 dogsDB:async function (){
    const dogsDB = await Dog.findAll({include: Temperament});
    return dogsDB;
},

};
