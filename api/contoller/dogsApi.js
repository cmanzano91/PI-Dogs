const api = require('./api');

async function dogsApi(){

let dogs = await api.apiDogs();

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

module.exports = dogsApi;