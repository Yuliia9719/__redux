import store from "./redux/store.ts";
import { Provider } from "react-redux";
import Counter from "./components/Counter.tsx";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
