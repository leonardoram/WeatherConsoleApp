const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': 'e6b119c65dmsh41515a6edbdb566p19fabbjsn7d59325f19f2' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para  ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}