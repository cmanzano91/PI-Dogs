var express = require('express');
const {Temperament} = require('../db.js');
var router = express.Router();
module.exports = router;

router.get('/', async (req, res) =>{
    try{
    const temp = await Temperament.findAll();
    const listTemp = await temp.map(t =>{
      return t.name
    });
     return res.json(listTemp.sort());
  }
  catch(e){
      res.sendStatus(500);
  }
 });