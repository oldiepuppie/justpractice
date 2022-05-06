import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 상태의 타입
export interface CounterState {
  value: number;
}

// 초기값
const initialState: CounterState = {
  value: 0,
};

// 리듀서 함수
const increase = (state: CounterState) => {
  state.value += 1;
};
const decrease = (state: CounterState) => {
  state.value -= 1;
};
const increaseByAmount = (
  state: CounterState,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};
/*
데이터 원본을 변형하는 것처럼 보이지만(mutating) toolkit에서 사용하는 Immer 라이브러리가 데이터를 immutable하게 다루는 과정을 추상화시켰음.
Immer가 원본 데이터의 변화를 감지하고 불변 상태(?)를 새로 만든다.
(원본 데이터A를 복제해서 B를 만들고, B를 변형하는 과정 -> `createSlice`, `createReducer`)
*/

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: increase,
    decrement: decrease,
    incrementByAmount: increaseByAmount,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
