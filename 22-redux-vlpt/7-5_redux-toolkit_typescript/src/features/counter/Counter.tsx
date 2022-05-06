import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increment());
  };
  const decrease = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={increase}>
          {" "}
          +{" "}
        </button>
        <p>{count}</p>
        <button aria-label="Decrement value" onClick={decrease}>
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
}
