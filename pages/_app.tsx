import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SnackbarProvider from "../providers/SnackbarProvider";
import Snackbar from "../components/Snackbar";

declare module "@mui/private-theming" {
  interface DefaultTheme {
    spacing: (spacing: number) => string;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Component {...pageProps} />;
        <Snackbar />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
