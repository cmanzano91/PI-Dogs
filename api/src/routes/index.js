const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dog = require('./dogs.js');
const temperament = require('./tempR.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dog);
router.use('/temperaments', temperament);

module.exports = router;
