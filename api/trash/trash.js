
 // MAP DE TEMPERAMENTOS - MACHEO DE LAS DOS TABLAS (dogs.js)
    // console.log(temp)
  //   temp.map(async t =>{
  //   await t.setTemperaments(newDog) 
  // })

    //  temp.map(async t => { 
  //  await t[0].setDogs(newDog)
  //  const matchoDogTemp = await Dog.find({
  //   where:{
  //     id: newDog.id
  //   },
  //   include: {Temperament}
  //  }) 
  //  await t.addDogs(matchoDogTemp)
  // })

    // const temp = temperaments.map(async t =>{ 
    //   await Temperament.findOrCreate({
    //     where:{
    //       name:t
    //     }
    //   }) // me devuelve un array con [[temperament, created], [temperament, created]]  
    // })
    
    // Promise.all(temp).then(()=>{
    //   temp.map(async t => {
    //     await newDog.addTemperaments(t[0])
    //     const match = await Dog.findOne({
    //       where: {
    //         id: newDog.id
    //       },
    //       include: Temperament
    //     })
    //     return match
    //   })
    // })


  //  -----------------------------------------------

  // RUTAS DE DOG (dogs.js)

// router.get('/dogs/{idRaza}', (req, res) =>{
//  const {idRaza} = req.params
//  console.log({idRaza})

// })

// router.get('/temperament', async (req, res) =>{
//     try{
      
//     let dogsTemp = await api.apiDogs()

//       dogsTemp = dogsTemp.map(d => {
//         if(d.temperament){
//       return d.temperament
//       }
//       }).join().split(',') 

//       let temps = []
//       dogsTemp.map(d => {
//         if(!temps.includes(d.trim()) && d){
//            temps.push(d.trim())
//         }
//       })

//       temps.map(async (d) =>{
//         await Temperament.create({name:d})
//       })
      
//     res.json(temps.sort())
      
//   }
//   catch(e){
//       res.sendStatus(500)
//   }
//  })

//  -----------------------------------------------
// MANEJO DE LA API (api.js)

// async function apiDogs(req, res){
//    try{ 
//    const dataApi = await axios.get('https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}')

//     const dogs = dataApi.data.map((d) => {
//         return {
//             imagen:d.image,
//             name:d.name,
//             peso:d.weight,
//            temperament: d.temperament,
//         }})
//     return res.json(dogs)
// }
// catch(e){
//     console.log('error')
// }
// }

// async function dogName(req, res){
//     const {name} = req.query
//     try{ 
//     const dataApi = await axios.get('https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}')
 
//      const nameDogs = dataApi.data.map((d) => {
//          if(d.name.includes(name)){
//              return d.name
//          }})
//      console.log(nameDogs)
//      return res.json(nameDogs)
//  }
//  catch(e){
//      console.log('error')
//  }
//  }



// module.exports = {
//     apiDogs, 
//     dogName,
// }

// ME GUARDO LA API EN UNA CONSTANTE
// const api = axios
// .get('https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}')
// .then(response => console.log(response))
// .catch(e => console.log(e))


//GUARDO INFO QUE VIENE DE MI API EN UNA VARIABLE
// const api = 
// axios
// .get('https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}')
// .then(function (response){
//   return response
// })
// .catch(e => console.log(e))
// api.then((r) => console.log(r))


    // dogName: async function (){
    //     try{ 
    //     const dataApi = await axios.get('https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}')
     
    //      const nameDogs = dataApi.data.map((d) => {
    //          if(d.name.includes(name)){
    //              return d.name
    //          }})
    //     //  console.log(nameDogs)
    //      return nameDogs
    //  }
    //  catch(e){
    //      console.log('error')
    //  }
    //  }

//  -----------------------------------------------
// MODELIZACION
      // let tempId;
  // temperaments.map(async t =>{
  //   tempId =  await Temperament.findOne({
  //       where:{
  //         name:t
  //       },
  //     atributes:["id"]
  //     })
  
  // })
