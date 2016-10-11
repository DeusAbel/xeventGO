var express = require('express'); 
var router = express.Router(); 
var ctrlUsuarios = require('../controllers/usuarios'); 
//router.get('/usuarios', ctrlUsuarios.usuariosCreate); 
router.post('/usuarios', ctrlUsuarios.usuariosCreate); 
router.post('/usuarios/:usuarioEmail', ctrlUsuarios.usuarioslogin);
//router.post('/usuarios/:usuarioEmail', ctrlUsuarios.usuarioslogin);
module.exports = router;