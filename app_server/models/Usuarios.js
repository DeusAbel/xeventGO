var mongoose = require( 'mongoose' ); 
var usuarioSchema = new mongoose.Schema({ 
  Nombres: String, 
  Apellidos: String, 
  Ubicación: {type: Number, index: '2dsphere'},
  Eventos: [String] 
}); 

var Team = module.exports = mongoose.model('Team', teamSchema); 
