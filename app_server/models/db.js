var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://admin:episunsa@ds046549.mlab.com:46549/xeventgo_db';


mongoose.connect(dbURI);
var readline = require('readline');
var Schema = mongoose.Schema;

var Usuario = mongoose.Schema({
    Nombres:{type: String, required: true},
    Email: String,
    Numero: String},
    {collection: "user data"} );

 mongoose.connection.on('connected', function () { 
   console.log('Mongoose default connection open to ' + dbURI); 
 }); 
 
 
 // If the connection throws an error 
 mongoose.connection.on('error',function (err) { 
   console.log('Mongoose defecto connection error: ' + err); 
 }); 
 
 
 // When the connection is disconnected 
 mongoose.connection.on('disconnected', function () { 
   console.log('Mongoose default connection disconnected'); 
 }); 
 
 
 // If the Node process ends, close the Mongoose connection 
 process.on('SIGINT', function() { 
   mongoose.connection.close(function () { 
     console.log('Mongoose default connection disconnected through app termination'); 
     process.exit(0); 
   }); 
}); 
