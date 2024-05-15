import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import LangingPage from "./assets/pages/LangingPage";
import { LanguageProvider } from "./assets/LanguageContext";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alata", "sans-serif"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <Navbar />
          <LangingPage />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
