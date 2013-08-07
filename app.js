var gpio = require('./');
gpio.readAllModes( function( error, data ){
  console.log( data );
});
