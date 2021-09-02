
const { default: axios } = require("axios");
const API = 'https://api.thedogapi.com/v1/breeds?api_key={49230131-922d-4250-b24a-41110a8c9dd2}';


module.exports = {
    apiDogs: async function (){
        try{ 
        const dataApi = await axios.get(API);
     
         const dogs =  await dataApi.data.map((d) => {
             return {
                 id: d.id,
                 image:d.image,
                 name:d.name,
                 weight:d.weight,
                 height: d.height,
                 life_span: d.life_span,
                 temperament: d.temperament,
             }});
         
         return dogs;
        }
        catch(e){
         console.log('error')
        };
     },

};
