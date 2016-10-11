/* GET 'Login user' page */
module.exports.login = function(req, res) {
    res.render('usuarios-login', {
        title: 'xEventGo',
        pageHeader: {
            title: 'xEventGo',
            strapline: 'Organice u encuentre eventos'
        },
        sidebar: "Ingreso"
    });
};

/* GET 'Register user' page */
module.exports.registro = function(req, res) {
    res.render('usuarios-registro', {
        title: 'Registro de nuevo Usuario',
        pageHeader: {
            title: 'Registro'
        },
        sidebar: {
            context: 'Por favor llene todo el formulario',
            //callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        }        
    });
};

/* GET 'Add review' page */
