import { Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { Provider } from "react-redux";

import { store } from "./store";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}>
        <Container>
          <Typography variant="h1" color="primary">
            Hi there!
          </Typography>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
