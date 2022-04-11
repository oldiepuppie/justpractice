# 2. 끝말잇기

## commit 요령

1. 작업 단위를 잘게 나눠 커밋 작성

   ```plain
   git add .
   git commit -m "이번 작업의 목표"
   ```

2. 수정

   ```plain
   git add.
   git commit --amend
   ```

- 메시지까지 한번에 수정

  ```plain
  git add.
  git commit --amend -m "메시지"
  ```

## 2-3. 웹팩 설치하기

- 리액트와 리액트돔 설치

  ```plain
  npm i react react-dom
  ```

- webpack, webpack-cli 설치

  ```plain
  npm i -D webpack webpack-cli
  ```

## 2-4. 모듈 시스템과 웹팩 설정

- `webpack.config.js`

  ```javascript
  const path = require("path");

  module.exports = {
    name: "wordrelay-setting",
    // ...생략
    entry: {
      app: ["./client"],
    },
    module: {
      // ... 바벨 관련 세팅
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "app.js",
    },
  };
  ```

- webpack 실행 명령어

  ```plain
  npx webpack
  ```

  - `entry`의 파일에 --- `module` 적용 ===> `output`에 지정한 파일에 스크립트가 파싱/작성됨.

## 2-5. 웹팩으로 빌드하기

- 에러 메시지

  ```plain
  Module parse failed: Unexpected token (6:16)
  # ...중략
  > ReactDom.render(<WordRelay />, document.querySelector("#root"));
  ```

  - 원인
    - jsx(`<WordRelay />`)는 자바스크립트 문법이 아니라 인식을 못한다.
  - 해결 방법
    1. 바벨에 jsx 세팅
    2. 웹팩에 1의 바벨 세팅

- 바벨 설치

  ```plain
  npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
  ```

  - `@babel/core` 기본적인 바벨
  - `@babel/preset-env`, `@babel/preset-react` 환경 반영(?)
  - `babel-loader` 바벨과 웹팩을 연결해준다
