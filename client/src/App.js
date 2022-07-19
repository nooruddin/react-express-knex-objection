import { Redirect, Route, Switch } from "react-router-dom";
import Student from "./components/student/Students";
import Educator from "./components/educator/Educators";
import NavBar from "./components/navigation/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Redirect from="/" to="/students" />
      <Switch>
        <Route path="/students" component={Student} />
        <Route path="/educators" component={Educator} />
      </Switch>
    </div>
  );
}

export default App;
