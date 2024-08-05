import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
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
            <>
              <Header />
              <Routes />
            </>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
