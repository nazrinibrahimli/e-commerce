import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import MainScreen from "./containers/MainScreen";
import Header from './containers/Header'
import NavLinks from "./containers/NavLinks";
import Footer from "./containers/Footer";


function App() {
  return (
    <div className="App bg-[#F8F8F8] ">
     <Header />
     <NavLinks/>
      <Router>
        <Switch>
          <Route path="/" exact component={MainScreen} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
