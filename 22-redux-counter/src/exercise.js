import { createStore } from "redux";
// [ createStore ] 스토어를 만들어주는 함수

// [ 리덕스에서 관리할 상태 ]
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// [ 액션 타입 ] - 주로 대문자로
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// [ 액션 생성 함수 ] - 주로 camelCase
function increase() {
  return {
    type: INCREASE,
  };
}

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// [ 리듀서 ]
// 불변성을 꼭 지킨다
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// [ 스토어 ]
const store = createStore(reducer);
console.log(store.getState()); // 현재 store에 들어있는 상태 조회

// 스토어에 들어있는 상태가 바뀔 때마다 호출된다
const listener = () => {
  const state = store.getState();
  console.log(state);
};

// 구독 해제
const unsubscribe = store.subscribe(listener);

// 액션 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
