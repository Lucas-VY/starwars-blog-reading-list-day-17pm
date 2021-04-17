import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/Notfound";
import Characters from "./views/Characters";
import Planets from "./views/Planets";
import Vehicles from "./views/Vehicles";
import Favorites from "./views/Favorites";
import injectContext from "./store/appContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/characters" component={Characters}></Route>
            <Route exact path="/planets" component={Planets}></Route>
            <Route exact path="/vehicles" component={Vehicles}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);