const api = require('./api');


// ME TRAE LA INFO QUE NECESITO PARA LA RUTA DE DOGS/ID DE MI API
async function dogsApi(){

let dogs = await api.apiDogs();

dogs = dogs && dogs.map((d) =>{
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

module.exports = dogsApi;