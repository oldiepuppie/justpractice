# 1. 구구단

## 1-2. 첫 리액트 컴포넌트

- HTML 파일에서 [CDN 링크](https://ko.reactjs.org/docs/cdn-links.html)로 작업 시작하기
- HTML 파일의 실행 순서
  1. head 태그
  - react와 react-dom을 불러온다.
  2. body 태그
  - 컴포넌트를 정의한 script 태그를 읽고 어떤 컴포넌트가 정의되었는지 인지한다.
  - 마지막 script 태그가 실행되면 앞서 정의한 컴포넌트를 지정한 위치에 그린다.
- 컴포넌트 정의하기
  - class 키워드로 React의 Component를 상속한다.
  - `render()`: 이런 내용의 태그를 만들겠다.
- 렌더링
  - `ReactDOM.render(e({컴포넌트이름}), {부모요소의 DOM})` : 부모 DOM에 자식으로 컴포넌트를 넣는다.

## 1-3. HTML 속성과 상태(state)

- 상태 : 바뀔 여지가 있는 부분
- 리액트 -> 상태가 바뀌면 화면이 저절로 바뀐다. 데이터와 화면을 일치시켜준다.

## 1-4. JSX와 바벨

- [바벨 스크립트 사용법](https://babeljs.io/docs/en/babel-standalone#script-tags)
- JSX
  - JS + XML
  - 자바스크립트를 확장한 문법
- JSX와 바벨
- [https://ko.reactjs.org/docs/introducing-jsx.html](https://ko.reactjs.org/docs/introducing-jsx.html)
  - 바벨이 JSX 구문을 `React.createElement()` 호출로 컴파일하면 **React 엘리먼트** 객체가 생성된다.
  - 리액트가 DOM을 구성하고 업데이트할 때 이 객체가 사용된다.

## 1-6. 구구단 리액트로 만들기

`onchange`와 `onsubmit`은 **자바스크립트** 이벤트 핸들러

- [GlobalEventHandlers.onchange - MDN](https://developer.mozilla.org/ko/docs/Web/API/GlobalEventHandlers/onchange)
- [GlobalEventHandlers.onsubmit - MDN](https://developer.mozilla.org/ko/docs/Web/API/GlobalEventHandlers/onsubmit)
