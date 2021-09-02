var express = require('express');
const {Dog, Temperament} = require('../db.js');
const api = require('../../contoller/api');
const dogsApi = require('../../contoller/dogsApi');
const dbDogs = require('../../contoller/dbFunc');
var router = express.Router();
module.exports = router;


// -------- GET DOGS & DOG BY NAME --------------

router.get('/', async (req,res) =>{ 
  const {name} = req.query;
    
  const dogs = await dogsApi();  

  // PARA USAR CAMBIAR CONST DOGS POR LET DOGS
  // for(let i=0; i< dogs.length; i++){
  //   dogs[i]["temperament"] = dogs[i]["temperament"].split(',').map(a => a.trim())
  //   console.log(dogs[i]["temperament"])
  // }
  
  const dogsDB = await dbDogs.dogsDB();
    
  const allDogs = [...dogsDB,...dogs];
    
    if(name){
      const dogName = allDogs.filter(d => {
        return d.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
      }).map(d => d.name);

      if(!dogName.length){
        return res.status(404).send({ msg: "Dog not found" });
      };
      return res.json(dogName); 
    };

    return res.json(allDogs);
 });

 // -------- GET DOG BY ID  --------------

 router.get('/:idDog', async (req,res) =>{

   const {idDog} = req.params;
   const dogs = await api.apiDogs();

  try{ 

    if(!isNaN(idDog)){ 
      const oneDog = dogs.find(d => { 
        return d.id === parseInt(idDog);
      });

      // PARA USAR CAMBIAR CONST ONEDOG POR LET ONEDOG
      // let arrayTemp = oneDog['temperament'].split(',').map(a => a.trim());
      // oneDog['temperament'] = arrayTemp;

      return res.json(oneDog);
    };

    let oneDogDB = await Dog.findByPk(idDog, {
        include: Temperament
      });


    return res.json(oneDogDB);  // SI TIRA NULL ES PORQUE NO SE CREO CORRECTAMENTE
}

catch(e){
  return res.status(400).send({ msg: "Id incorrecto"});

}

 })

// -------- POST NEW DOG  --------------

router.post('/', async (req,res) =>{

  const {name, height, weight, life_span, temperament} = req.body;

  try{
  const newDog = await Dog.create({
    name, 
    height, 
    weight, 
    life_span
  });

  await newDog.addTemperaments(temperament);

   return res.json(newDog);
  
  }
  catch(e){
     return res.send({msg: "Debe completar todo los campos obligatorios"});
  }
  

});




