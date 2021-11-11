import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Report from './pages/Report';

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
          <Route>
            < Report path="/report" />
          </Route>
          {/* < Route exact path="/" component="Login" />
          < Route path="/signup" component="Signup" /> */}
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
