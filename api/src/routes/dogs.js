var express = require('express');
const {Dog} = require('../db.js');
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
  
  const allDogs = [...dogsDB,...dogs];
    
    if(name){
      const dogName = allDogs.filter(d => {
        return d.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
      });

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
  let height = minheight + ' - ' + maxheight;
  let weight = minweight + ' - ' + maxweight;
  let life_span;

  if(minlife_span && maxlife_span){
  life_span = minlife_span + ' - ' + maxlife_span + ' years';
  }
  else{
    life_span = 'Life span not declared';
  }

  let image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0G5ozUnb5Scrh7O-U4R5leSxHo17hwUhRhEPaykldXUr5z5HJ451-C2oti-4-sWq7T0E&usqp=CAU'

if(name && minweight && maxweight && minheight && minheight){
  try{
  const newDog = await Dog.create({
    name, 
    weight,
    height, 
    life_span,
    image
  });

  await newDog.addTemperaments(temperament);

   return res.json(newDog);
  
  }
  catch(e){
     return res.send({msg: "Error de carga de perro"});
  }
}
else{
  return res.status(404).send({msg: "Faltan los valores basicos"})
}

});




