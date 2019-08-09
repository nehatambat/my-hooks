import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Example from "./Example";
import Footer from "./Footer";

const App = () => {
  return (
    <div id="appPage">
      <Header />
      <Example />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
