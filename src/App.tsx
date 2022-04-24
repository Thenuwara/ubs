import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./route/AppRoute";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
