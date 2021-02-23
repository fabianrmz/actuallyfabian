
import Home from './routes/Home/Home';
import SoyAdmin from './routes/Soyadmin/Soyadmin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route path="/soyadmin" component={SoyAdmin}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>

      
    </>
  );
}

export default App;
