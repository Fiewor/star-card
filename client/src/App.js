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
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
