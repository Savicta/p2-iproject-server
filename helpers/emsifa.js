const axios = require('axios');

const regionAxios = axios.create({
  baseURL: 'https://www.emsifa.com/api-wilayah-indonesia'
});

const fetchProvinces = async (_, res) => {
  try {
    const provinceData = await regionAxios({
      method: 'GET',
      url: 'api/provinces.json'
    });
    res.status(200).json(provinceData.data);
  } catch (err) {
    res.status(400).json(err);
  }
}

const fetchRegiences = async (req, res) => {
  try {
    const regiences = await regionAxios({
      method: 'GET',
      url: `api/regencies/${req.params.provinceId}.json`
    });
    res.status(200).json(regiences.data);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { fetchProvinces, fetchRegiences };