# GPIO.js - For now, a simple wrapper

3 This is a stupid module. It just spawns a new new process in order to communicate with gpio. Will     eventually make a c module that will do better. I couldn't get the other node modules to work, so I made this simple wrapper.

___Requires (wiringpi)[https://projects.drogon.net/raspberry-pi/wiringpi/]___

```
npm install gpiojs
```

__Note:__ Since this requires wiringpi, if you use this, please follow wiringpi's gpio scheme

## API

To use, include:

```javascript
var gpio = require('gpiojs');
```

### gpio.set( port, value, callback )

Sets a GPIO port value. Example:

```javascript
gpio.set( 1, 1, function(){
  console.log("Set port 1 to high");
});
```

### gpio.label( name, port )

Alias a GPIO ports

```javascript
gpio.label( 'led-1', 1 );
gpio.set( 'led-1', 1, function(){
  console.log("Led-1 is now on");
});
```

### gpio.setMode( port, mode, callback )

Sets a GPIO port mode. If you want to send a signal out, then set your port to out. Example:

```javascript
gpio.setMode( 1, 'out', function(){
  console.log("Port 1 ready for writing");
});
```

### gpio.readAll( callback )

Get the current GPIO configuration. Equivalent to ```gpio readall```. Sends an array of objects to the second argument of the callback. The index of the array corresponds to the GPIO port. Example:

```javascript
gpio.readAll( function( error, config ){
  console.log( "GPIO Port 1 has mode of", config[ 1 ].Mode, "and value of", config[ 1 ].Value );
});
```
