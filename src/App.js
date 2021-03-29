import Start from './routes/Start';
import Desktop from './routes/Desktop';
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
          <Route path="/desktop" component={Desktop} title="user"/>
          <Route path="/" component={Start} title={"Home"}/>
        </Switch>
      </Router>

      
    </>
  );
}

export default App;
