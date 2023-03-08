import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePages } from "./components/HomePage/HomePages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
