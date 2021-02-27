import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from './commons';
import {ContactPage} from './pages/HomePage/index'
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
        <Switch>
          <Route exact path = "/" component = {ContactPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
