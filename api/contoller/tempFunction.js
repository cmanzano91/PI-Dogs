const {Temperament} = require('../src/db.js');
const api = require('./api.js');

async function tempFunction(){
    try{
    let dogsTemp = await api.apiDogs();
    

    dogsTemp = dogsTemp.map(d => {
      if(d.temperament){
      return d.temperament;
    };
    }).join().split(',');

  
    let temps = [];

    dogsTemp.map(d => {
      if(!temps.includes(d.trim()) && d){
         temps.push(d.trim());
      };
    });

    temps.map(async (d) =>{
      await Temperament.create({name:d});
    });

    console.log('db loaded');
 
}
catch(e){
    console.log('error de carga de temperaments');
}
};

module.exports = tempFunction;