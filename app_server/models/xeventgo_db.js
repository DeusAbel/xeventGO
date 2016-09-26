var mongoose = require( 'mongoose' ); 


var usuarioSchema = new mongoose.Schema({ 
  Nombres: String, 
  Apellidos: String, 
  Ubicación: {type: Number, index: '2dsphere'},
  Eventos: [String] 
}); 

var usuario = module.exports = mongoose.model('usuario', usuarioSchema); 


var eventoSchema = new mongoose.Schema({   
  Nombre: String, 
  Fecha: String, 
  Ubicación: {type: Number, index: '2dsphere'},
  usuario: { type: Schema.ObjectId, ref: "usuario" }   
}); 

var evento = module.exports = mongoose.model('evento', usuarioSchema);