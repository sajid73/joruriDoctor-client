import React from 'react';
import AppRouter from "./AppRouter";
import Footer from './components/common/footer/Footer';
import Header from "./components/common/header/Header";

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
