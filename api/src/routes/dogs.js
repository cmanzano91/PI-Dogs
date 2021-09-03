var express = require('express');
const {Dog, Temperament} = require('../db.js');
const api = require('../../contoller/api');
const dogsApi = require('../../contoller/dogsApi');
const dogsBD = require('../../contoller/dogsDB')
const dbDogs = require('../../contoller/dbFunc')
var router = express.Router();
module.exports = router;


// -------- GET DOGS & DOG BY NAME --------------

router.get('/', async (req,res) =>{ 
  const {name} = req.query;
    
  let dogs = await dogsApi();  
  
  const dogsDB = await dogsBD();
  console.log(dogsDB)
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
   const dogsBD  = await dbDogs.dogsDB()
  try{ 

    if(!isNaN(idDog)){ 
      let oneDog = dogs.find(d => { 
        return d.id === parseInt(idDog);
      });
      
      if(oneDog){
      return res.json(oneDog);
      }
      else {
        return res.status(400).send('Dog not found')
      }
  
    };

    let oneDogDB = dogsBD.find(d =>{ 
      return d.id === idDog;
    })

      if(oneDogDB){
        try {
          return res.json(oneDogDB) 
        }
        catch(e){
          console.log('no se creo correctamente')
        }
      }
}

catch(e){
  return res.status(400).send({ msg: "Id incorrecto"});
}

 })

// -------- POST NEW DOG  --------------

router.post('/', async (req,res) =>{

  const {name, minheight, maxheight, minweight, maxweight, minlife_span, maxlife_span, temperament} = req.body;
  let height = minheight + ' - ' + maxheight
  let weight = minweight + ' - ' + maxweight
  let life_span = minlife_span + ' - ' + maxlife_span + ' years'

  try{
  const newDog = await Dog.create({
    name, 
    weight,
    height, 
    life_span
  });

  await newDog.addTemperaments(temperament);

   return res.json(newDog);
  
  }
  catch(e){
     return res.send({msg: "Error de carga de perro"});
  }
  

});




