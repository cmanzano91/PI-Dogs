const dbDogs = require('./dbFunc')

// ME TRAE LA INFO QUE NECESITO PARA LA RUTA DE DOGS/ID DE MI BASE DE DATOS
async function dogsBD(){

    let dogs = await dbDogs.dogsDB();
    
    dogs = dogs.map((d) =>{
      return {
      id: d.id,
      image:d.image,
      name:d.name,
      weight:d.weight,
      temperament:d.temperament
    };
    });
    return dogs;
    };
    
    module.exports = dogsBD;