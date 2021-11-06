require('dotenv').config();
const axios = require('axios');

module.exports = {
  getUltraSrtNcst: ({ numOfRows, pageNo, base_date, base_time, nx, ny }) => {
    // 초단기실황 조회
    let ncstExample = `
      http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${process.env.KMA_ENCODING_KEY}&numOfRows=${numOfRows}&dataType=JSON&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}
    `;
    try {
      return (
        axios({
          method: 'get',
          url: ncstExample
        })
        .then(res => res.data)
        .catch(err => console.log(err))
      );
    } catch {
      return { error: '초단기실황조회 실패', data: null };
    }
  },

  getUltraSrtFcst: ({ numOfRows, pageNo, base_date, base_time, nx, ny }) => {
    // 초단기예보조회
    let srtFcstExample = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${process.env.KMA_ENCODING_KEY}&numOfRows=${numOfRows}&dataType=JSON&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

    try {
      return (
        axios({
          method: 'get',
          url: srtFcstExample
        })
        .then(res => res.data)
        .catch(err => console.log(err))
      );
    } catch {
      return { error: '초단기예보조회 실패', data: null };
    }
  }
};