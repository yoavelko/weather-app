const axios = require('axios');

exports.search = async (req, res) => {
    const city = req.body.city
    const url = `https://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=${city}&aqi=no`;
    axios.get(url)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
};