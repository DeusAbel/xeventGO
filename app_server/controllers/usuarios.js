var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};


var renderDetailPage = function (req, res, locDetail) {
  res.render('index', {
    title: "logeo exitoso"
  });
};


var getUserInfo = function (req, res, callback) {
  console.log(req.body.usuario);
  var requestOptions, path;
  console.log("antes de path");
  path = "/api/usuarios/" + req.body.usuario;
  console.log(path);
  postdata = {
    usuario: req.body.usuario,
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : postdata
  };
  console.log("cuerpo");
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        console.log('bien');
        
        callback(req, res, data);
      } else {
        console.log('mal');
        res.redirect('/index');
      }
    }
  );
};


var RegistrarUsuario = function (req, res, callback) {
  console.log("dentro de registro");
  var requestOptions, path;  
  path = "/api/usuarios";
  console.log(path);
  postdata = {
    usuario: req.body.usuario,
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  console.log("cuerpo a insertar" + req.body.usuario + req.body.email);
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      console.log(response.statusCode);
      if (response.statusCode === 201) {
        console.log('Rbien');
        
        callback(req, res, data);
      } else {
        console.log('Rmal');
        res.redirect('/index');
      }
    }
  );
};

/* GET 'Login user' page */
module.exports.login_p = function(req, res) {
    res.render('usuarios-login', {
        title: 'xEventGo'   
    });   
};



module.exports.login = function(req, res){
    console.log('hola estuve aqui2');
    var usuario= req.body.usuario;
    console.log(usuario);
    console.log('parametros2: ' + req.body.usuario);
    getUserInfo(req, res, function(req, res, responseData) {
    renderDetailPage(req, res, responseData);
  });
};


/* GET 'Register user' page */
module.exports.registro_p = function(req, res) {
    res.render('usuarios-registro', {
        title: 'Registro de nuevo Usuario',        
    });
};


module.exports.registro = function(req, res) {
    console.log('hola estuve en registro');
    var usuario= req.body.usuario;
    console.log(usuario);
    console.log('parametros3: ' + req.body.usuario);
    RegistrarUsuario(req, res, function(req, res, responseData) {
    renderDetailPage(req, res, responseData);
  });
};
