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

const getInfo = async(direccion) => {
    const lug = await lugar.getLugarLatLng(direccion);
    const clim = await clima.getClima(lug.latitud, lug.longitud);
    return { lug, clim };
}

getInfo(argv.direccion)
    .then((data) => { console.log(`El clima en ${data.lug.direccion} es de ${data.clim} ºC`) })
    .catch(e => {
        console.log("error", e);
    });