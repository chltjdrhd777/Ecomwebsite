import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "routes/Cart";
import Home from "routes/Home";
import Product from "routes/Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
