import { Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container>
        <Typography variant="h1" color="primary">
          Hi there!
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
