import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
          {/* < Route exact path="/" component="Login" />
          < Route path="/signup" component="Signup" /> */}
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
