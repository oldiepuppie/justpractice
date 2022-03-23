// import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, onDecrease, onIncrease, onSetDiff }) {
  // const { number, diff } = useSelector(
  //   (state) => ({
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   }),
  //   shallowEqual
  // );

  // const dispatch = useDispatch();

  // const onIncrease = () => dispatch(increase());
  // const onDecrease = () => dispatch(decrease());
  // const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
