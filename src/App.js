import { ThemeProvider } from "@emotion/react";
import AppRouter from "./AppRouter";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import CallNotification from "./components/dashboard/Consulting/Notifications";
import { theme } from "./components/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRouter />
      <CallNotification />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
