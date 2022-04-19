# 7-redux-middleware

## TODO

### 진행 순서 (4/13 이후)

1. [ ] [[7-8], [7-9], [7-10], [7-11], [7-12]
2. [ ] [7-5]에서 '리덕스 모듈 리팩토링하기' 부분, [7-6]

### 주의

- 커밋 현황, 디렉토리 depth 확인하고 push하기
- 브랜치 운용
  - `working` 브랜치에서 redux-thunk 진행 -> `main`으로 병합
  - `working`에서 redux-saga 진행 -> `main` 병합

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

## [Updates to Client Rendering APIs](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

## 미들웨어의 사용

- "미들웨어 안에서는 무엇이든지 할 수 있습니다."
- 액션 값으로 객체가 아닌 함수를 받아와서 실행시킬 수 있다.
  - cf. redux-thunk
- redux-logger
  - 콘솔에 리덕스 관련 값을 로깅하는 미들웨어

## [Array.prototype.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

> ... 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

## history

### history // TODO

[https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack)

### Location

리액트 라우터에서 제공하는 객체. 브라우저의 window.location 객체에 기반을 둔다. 유저의 위치를 표시한다. URL을 객체로 표현한 것이라 볼 수 있다.

### History Stack

브라우저가 사용자의 위치를 저장하는 곳. Last In First Out의 선형 구조.

### History

URL의 변화를 추적하여 반영하고(subscribe) history stack을 조작을 위한 API를 제공하는 객체

## ⚠️ Router / BrowserRouter

- [ ] Router / BrowserRouter 구분
- [ ] goToHome (modules/posts)
- [ ] goToHome을 dispatch하는 이유, goToHome을 모듈에서 다루는 이유

[BrowserRouter vs Router with history.push()](https://stackoverflow.com/questions/56707885/browserrouter-vs-router-with-history-push)

```plain
Uncaught TypeError: Cannot read properties of undefined (reading 'pathname')
at Router (components.tsx:197:1)
#...
```

["Cannot read properties of undefined (reading 'pathname')" when testing pages in the v6 React Router](https://stackoverflow.com/questions/69859509/cannot-read-properties-of-undefined-reading-pathname-when-testing-pages-in)
