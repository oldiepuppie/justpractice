
require('dotenv').config();
const axios = require('axios');
const convert = require('xml-js');

module.exports = {
  getUltraSrtNcst: ({ serviceKey, numOfRows, pageNo, base_date, base_time, nx, ny}) => {
    // 초단기실황 조회
    let ncstExample = `
      http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}
    `;

    try {
      return (
        axios({
          method: 'get',
          url: ncstExample
        })
        .then(res => res.data)
        .then(xml => {
          let json = convert.xml2json(xml, {compact: true, spaces: 4});
          return json;
        })
        .catch(err => console.log(err))
      );
    } catch {
      return { error: '초단기실황조회 실패', data: null };
    }
  },

  getUltraSrtFcst: () => { // 초단기예보조회
    try {
      // return axios.get(`${endPoint}/getUltraSrtFcst`);
    } catch {
      return ['초단기예보조회 실패', null];
    }
  },

  getVilageFcst: () => { // 단기예보조회
    try {
      // return axios.get(`${endPoint}/getVilageFcst`);
    } catch {
      return ['단기예보조회 실패', null];
    }
  },

  getFcstVersion: () => { // 예보버전조회
    try {
      // return axios.get(`${endPoint}/getFcstVersion`);
    } catch {
      return ['예보버전조회 실패', null];
    }
  }
};