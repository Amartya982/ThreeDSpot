import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./pages/Store/Store";
import Navbar from "./Home/Nav/Navbar";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./Home/footer/Footer";
import Login from "./pages/Login/Login";
import Order from "./pages/Order/Order";
import SignUp from "./pages/Signup/Signup";
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <>
      <Router>
        <div className="gradient__bg">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/createorder" component={CreateOrder} />
          </Switch>
          <Footer />
        </div>

        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </>
  );
}

export default App;
