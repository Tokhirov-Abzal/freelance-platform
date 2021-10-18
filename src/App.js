import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import { Home, Specialist, Job, About, Publish, Register } from "./pages/";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/specialist" component={Specialist} />
        <Route path="/job" component={Job} />
        <Route path="/about" component={About} />
        <Route path="/publish" component={Publish} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
