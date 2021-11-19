import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import DashboardResult from "./pages/DashboardResult";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeLogin from "./pages/EmployeLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/report">
            <Report />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/create-employee">
            <CreateEmployee />
          </Route>

          <Route path="/employee-login">
            <EmployeeLogin />
          </Route>

          <Route path="/result">
            <DashboardResult />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
