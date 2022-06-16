import React, { Component } from "react";
import Products from "./components/Products";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import AboutUs from "./components/AboutUs";
import { Route,Switch,Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={Product}/>
            <Route path="/blogs/:author?" render={(props) => <Blogs name="Amir" {...props} />} />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/notfound" component={NotFound} />
            <Redirect from="/articles" to="/blogs" />
            <Route exact path="/" component={Home} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
