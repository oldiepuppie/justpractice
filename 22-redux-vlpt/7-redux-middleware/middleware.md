# 7-redux-middleware

- [ ] 22/04/01 : 7-3부터

## 화살표함수와 클로저

- `function` 키워드를 이용해 작성하기
  ```javascript
  function middleware(store) {
    return function (next) {
      return function (action) {
        // ...
      };
    };
  }
  ```
- 화살표 함수 사용
  ```javascript
  const middleware = (store) => (next) => (action) => {
    // ...
  };
  ```

## 미들웨어의 사용

- "미들웨어 안에서는 무엇이든지 할 수 있습니다."
- 액션 값으로 객체가 아닌 함수를 받아와서 실행시킬 수 있다.
  - cf. redux-thunk
- redux-logger
  - 콘솔에 리덕스 관련 값을 로깅하는 미들웨어
