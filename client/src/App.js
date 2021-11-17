import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Report from './pages/Report';
import Dashboard from './pages/Dashboard';
import DashboardResult from './pages/DashboardResult';
<<<<<<< HEAD
import CreateEmployee from './pages/CreateEmployee';
import EmployeeLogin from './pages/EmployeeLogin';
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/">
            <LandingPage/>
          </Route>

          <Route exact path="/login">
            {/* <Header/> */}
            <Login/>
            {/* <Footer/> */}
          </Route>

          <Route path="/signup">
            {/* <Header/> */}
            <Signup/>
            {/* <Footer/> */}
          </Route>

          <Route path="/report">
            < Report  />
          </Route>

          <Route path="/dashboard">
            < Dashboard />
          </Route>

          <Route path="/result">
            < DashboardResult />
          </Route>
<<<<<<< HEAD

          <Route path="/createmployee">
            < CreateEmployee />
          </Route>

          <Route path="/employeelogin">
            < EmployeeLogin />
          </Route>
=======
>>>>>>> 02dafd5f997fd1d4ece082e74a56fbef0b5c590c
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
