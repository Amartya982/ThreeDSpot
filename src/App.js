import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Navbar from "./Home/Nav/Navbar";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Footer from "./Home/footer/Footer";
import Login from "../src/pages/Login"
import Order from "./pages/Order";
import CreateOrder from "./pages/CreateOrder";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/createorder" component={CreateOrder} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
