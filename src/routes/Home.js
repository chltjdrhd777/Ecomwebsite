import React from "react";
import Header from "components/HomeComp/Header";
import Main from "components/HomeComp/Main";
import Footer from "components/HomeComp/Footer";
import "scss/Home.scss";

function Home() {
  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
