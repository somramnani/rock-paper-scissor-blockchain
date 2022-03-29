import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SnackbarProvider from "../providers/SnackbarProvider";
import PositionedSnackbar from "../components/Snackbar";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Component {...pageProps} />;
        <PositionedSnackbar />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
