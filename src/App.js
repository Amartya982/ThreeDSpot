
import 'bulma/css/bulma.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import  Pricing from "./pages/Pricing"
import Navbar from './Home/Nav/Navbar';

function App() {
  return (
   <>
  <Router>
  <Navbar/>
        <Switch>
      
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing}/>
        </Switch>
      </Router>
   </>
  );
}

export default App;
