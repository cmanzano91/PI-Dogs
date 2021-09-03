const {Temperament,Dog} = require('../src/db.js');

// TRAIGO TODA LA INFO QUE NECESITO DE LA BASE DE DATOS PARA TODAS MIS RUTAS
module.exports = {
 dogsDB:async function (){
    let dogsDB = await Dog.findAll({include: Temperament});

    let result = dogsDB.map(d => {
        return {
            id: d.id,
            name: d.name,
            height: d.height,
            weight: d.weight,
            life_span: d.life_span,
            temperament:d.dataValues.temperaments.map(t => t.name)
        }
    })

    return result;

},

};
