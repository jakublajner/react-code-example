import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import { store } from "./store";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
