import Home from "./pages/Home";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "./theme";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
