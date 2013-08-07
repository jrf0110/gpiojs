var proc = require('child_process');
var utils = require('./utils');
var gpiojs = module.exports = {};

var labels = {};

gpiojs.raw = function(){
  var args = Array.prototype.slice.call( arguments, 0 );
  var callback = args.pop() || utils.noop;
  var output = "";

  var gpioProc = proc.spawn( 'gpio', args );

  gpioProc.stdout.on( 'data', function( data ){
    output += data;
  });

  gpioProc.on( 'close', function(){
    callback( null, output || null );
  });
};

gpiojs.readAll = function( callback ){
  gpiojs.raw( 'readall', function( error, data ){
    if (error) return callback ? callback( error ) : null;

    if ( callback ) callback( null, utils.convertTextTable( data ) );
  });
};

gpiojs.setMode = function( port, mode, callback ) {
  gpiojs.raw( 'mode', port, mode, callback );
};

gpiojs.set = function( port, value, callback ){
  gpiojs.raw( 'write', port in labels ? labels[ port ] : port, value, callback );
};

gpiojs.label = function( name, port ){
  labels[ name ] = port;
};
