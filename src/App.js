import Footer from "components/HomeComp/Footer";
import Header from "components/HomeComp/Header";
import HomeScreen from "components/HomeComp/HomeScreen";
import ProductScreen from "components/HomeComp/ProductScreen";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "scss/Home.scss";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />

        <Route exact path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
