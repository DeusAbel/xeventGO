var mongoose = require('mongoose');
var tusuarios = mongoose.model('usuarios');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


/* GET a location by the id */
module.exports.usuariosLogin = function(req, res) {
  console.log('Identificando usuario', req.params.usuario);
  
  if (req.params && req.params.usuario) {
    console.log("antes de mongo");
    //var usuarioList = tusuarios.find({Usuario:req.body.usuario, Password: req.body.password });

    console.log("mongo todo:" + req.body.password);

    var datos;
    tusuarios
      .findOne({Usuario:req.body.usuario, Password: req.body.password})
      .exec(function(err, usuario) {
        //console.log("contenido: " + usuario.Email);
        if (!usuario) {
          sendJSONresponse(res, 404, {
            "message": "Usuario no encontrado"
          });
          return;
        } else if(err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        console.log("ESTO ES:" + usuario);
        datos=usuario;
        console.log("SON LOS DATO: "+ usuario);
        sendJSONresponse(res, 200, usuario);   
        //res.json(usuario);          
      });

    /*var reg = usuarioList.next();
    console.log("mongo uno");
    console.log("registro: " + reg);
    if (usuarioList){      
      sendJSONresponse(res, 200, usuario);
      console.log('Encontrado');      
    }
    else{
      sendJSONresponse(res, 404, err);
      console.log('NO Encontrado');
      return;
    }*/        
  } else {    
    console.log('Email no especificado');
    sendJSONresponse(res, 404, {
      "Mensaje": "Sin datos del usuario"
    });
  }
};

/*
if (req.params && req.params.usuario) {
    tusuarios
      .find({$and:[{Usuario:req.params.usuario},{Password:req.params.password}]})
      .exec(function(err, usuario) {
        if (!usuario && !) {
          console.log("Usuario no encontrado");
          sendJSONresponse(res, 404, {
            "Mensaje": "Usuario no encontrado"
          });
          return;
        } else if (err) {
          console.log("error catastrofico");
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        //console.log(usuario);
        sendJSONresponse(res, 200, usuario);

      });
      //sendJSONresponse(res, 200, "exitos");
  } else {    
    console.log('Email no especificado');
    sendJSONresponse(res, 404, {
      "Mensaje": "Sin datos del usuario"
    });
  }
};*/

/* POST a new usuario */
/* /api/usuarios */
module.exports.usuariosCreate = function(req, res) {
  console.log("esto se insertara: "+req.params.usuario+" "+req.query.email+" "+req.body.password);  
  tusuarios.create({
    Usuario: req.body.usuario,
    Nombre: req.body.nombre,
    Email: req.body.email,
    Password: req.body.password
  }, function(err, usuario) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
      console.log('Datos erroneos');
    } else {
      console.log(usuario);
      console.log('Insertado');
      sendJSONresponse(res, 201, usuario);
    }
  });
};