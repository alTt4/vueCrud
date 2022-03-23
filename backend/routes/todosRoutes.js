const express = require('express');
const router = express.Router();
const todoController= require('../controllers/todoController');

router.get('/',todoController.list );
//router.get('/:id', verifyParams, todoController.getOneItem); // protéger les routes avec verify 
//router.post('/', todoController.getOneItem);//Ajout
//router.patch('/:id', todoController.getOneItem);
//router.delete('/:id', todoController.getOneItem);

module.exports = router
