import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";
import { CounterState } from "../redux/types";

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Count: {count}
      </h1>
      <input type="text" value={count} />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
