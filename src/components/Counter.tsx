import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { useAppDispatch } from "../redux/store.ts";
import { incrementAsync, decrementAsync } from "../redux/counterSlice.ts";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>
        Count: {count}
      </h1>
      <input type="text" value={count} />
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
    </div>
  );
};

export default Counter;
