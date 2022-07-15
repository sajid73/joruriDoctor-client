import { ThemeProvider } from "@emotion/react";
import AppRouter from "./AppRouter";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import { theme } from "./components/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
