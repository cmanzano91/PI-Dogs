
const { default: axios } = require("axios");
const API = 'https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}';

// TRAIGO TODA LA INFO QUE NECESITO DE LA API PARA TODAS MIS RUTAS
module.exports = {
    apiDogs: async function (){
        try{ 
        const dataApi = await axios.get(API)
        
         const dogs =  await dataApi.data.map((d) => {
             if(d.temperament){
                 try{
                 let arrayTemp = d.temperament.split(',').map(t => t.trim())
                 d.temperament = arrayTemp
                }
             
             catch(e){
                console.log('error en el if de temperament')
             }
            }
             return {
                 id: d.id,
                 image:d.image.url,
                 name:d.name,
                 weight:d.weight.imperial,
                 height:d.height.imperial,
                 life_span: d.life_span,
                 temperament: d.temperament,
                }});
         return dogs
        }
        catch(e){
         console.log('error')

        }
     },

};
