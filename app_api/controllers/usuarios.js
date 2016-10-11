var mongoose = require('mongoose');
var tusuarios = mongoose.model('usuarios');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


/* GET a location by the id */
module.exports.usuariosLogin = function(req, res) {
  console.log('Identificando usuario', req.params);
  if (req.params && req.params.usuarioEmail) {
    tusuarios
      .findById(req.params.usuarioEmail)
      .exec(function(err, usuario) {
        if (!usuarioEmail) {
          sendJSONresponse(res, 404, {
            "Mensaje": "Usuario ni encontrado"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, usuario);
      });
  } else {
    console.log('Email no especificado');
    sendJSONresponse(res, 404, {
      "Mensaje": "Sin datos del usuario"
    });
  }
};

/* POST a new usuario */
/* /api/usuarios */
module.exports.usuariosCreate = function(req, res) {
  console.log(req.body);
  tusuarios.create({
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password
  }, function(err, usuario) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(usuario);
      sendJSONresponse(res, 201, usuario);
    }
  });
};