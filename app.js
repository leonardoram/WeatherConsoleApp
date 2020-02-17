//aplicacion para mostar el clima de cualquier ciudad mediante comandos

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la Cd para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(e => {
//         (console.log("error", e))
//     });

const getInfo = (direccion) => {


}