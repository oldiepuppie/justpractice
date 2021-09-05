// TODO 모델을 require

// TODO 컨트롤러 작성
module.exports = {
  getAllData: (req, res) => {
    // 모든 데이터 가져오기
    console.log('getAllData works');
  },
  getCount: (req, res) => {
    // 데이터의 수 가져오기
    console.log('getCount works')
  },
  post: (req, res) => {
    // 아이디에 맞춰 proverb 내보내기
    console.log('post works');
  }
}