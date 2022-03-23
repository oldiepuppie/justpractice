# redux-counter

**벨로퍼트와 함께하는 모던 리액트**에서 다음 챕터를 학습합니다.

- [ ] 6장. 리덕스
- [ ] 7장. 리덕스 미들웨어
      [https://react.vlpt.us/redux/01-keywords.html](https://react.vlpt.us/redux/01-keywords.html)

## 읽을 거리

- [ ] [React ❤️ Immutable.js – 리액트의 불변함, 그리고 컴포넌트에서 Immutable.js 사용하기](https://velopert.com/3486)
- [ ] [Presentational and Container Components
      ](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [x] ⚠️ [useCallback 을 사용하여 함수 재사용하기](https://react.vlpt.us/basic/18-useCallback.html)
  - `useCallback`은 함수를 재사용할 때 사용한다.
  - 컴포넌트에 정의한 함수는 컴포넌트가 리렌더링 될 때마다 새로 만들어진다. 함수를 필요할 때만 만들고 재사용하기 위해 useCallback을 사용한다.
    - useCallback + 컴포넌트 렌더링 최적화 -> 성능 최적화
  - 함수 안에서 사용하는 상태나 props를 `deps` 배열에 포함시킨다.
- [x] ⚠️ [19. React.memo 를 사용한 컴포넌트 리렌더링 방지](https://react.vlpt.us/basic/19-React.memo.html)
  - 컴포넌트의 props가 바뀌지 않으면 리렌더링 방지
