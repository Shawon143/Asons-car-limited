import "./App.css";
import Homepage from "./Pages/HomePage/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Shared/Header/Header";
import ViewCars from "./Pages/ViewCars/ViewCars";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Privateroute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Update from "./Pages/Dashboard/Update/Update";

function App() {
  return (
    <div className="App bg-dark">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/cars">
              <ViewCars></ViewCars>
            </Route>
            <PrivateRoute path="/place/:carID">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manageproducts/update/:id">
              <Update></Update>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
