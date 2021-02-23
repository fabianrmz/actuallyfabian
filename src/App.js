
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
      <Router>
        <Switch>
          <Route path="/soyadmin">
            <SoyAdmin></SoyAdmin>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

      
    </>
  );
}

export default App;
