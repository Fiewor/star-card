import './App.css';
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
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
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
