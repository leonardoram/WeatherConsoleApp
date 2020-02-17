const axios = require('axios');

const getClima = async(lat, lon) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3455a15b5f9e64a9626c72aa363ac7f7&units=metric`)

    return res.data.main.temp;
}

module.exports = {
    getClima
};