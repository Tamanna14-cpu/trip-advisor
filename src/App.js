import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>


            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/order">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/manage">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>



            <Route path="/login">
              <Login></Login>
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
