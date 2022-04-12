# 7-redux-middleware

- [ ] 22/04/05 : '7-5 리덕스 모듈 리팩토링하기' 다시 해보기, (에러 핸들링)

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

## [Array.prototype.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

> ... 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
