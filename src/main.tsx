import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";
import Layout from "./Components/Layout/Layout.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#7352C7',
    },
    text: {
      primary: '#212121',
      secondary: '#6E6E6E',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(115, 82, 199, 0.04)',
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
