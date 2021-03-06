const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  // defino el modelo
  const Dog = sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false
    },  
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
    },
    image:{
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });

};  

