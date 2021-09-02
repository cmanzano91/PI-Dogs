const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  const Temperament = sequelize.define('temperament', {
    name:{
      type: DataTypes.STRING,
      primaryKey: true
    }
  },{
    timestamps: false
  });
};