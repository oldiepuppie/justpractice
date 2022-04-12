const myLogger = (store) => (next) => (action) => {
  // 전달받은 액션을 출력하고 다음으로 넘기는 작업

  console.log(action);
  // 액션 출력 // {type: 'INCRESE'}

  const result = next(action);
  // 액션 전달

  /*
  console.log(next);
  ƒ dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add mid...
  ...이하 생략
  */

  /*
  console.log(result === action);
  // true
  */

  // 업데이트 이후의 상태 조회
  console.log("\t", store.getState()); // (ex) {counter: 1}

  return result; // dispatch(action)의 결과물
};

export default myLogger;
