import { Component } from "react";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import AboutMe from "./routes/aboutme/aboutme.component";
import Navbar from "./components/navbar/navbar.component";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {};
  // }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
