import Navbar from "./Navbar"
import Home from "./Home"
//#21 
import { BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Create from "./Create";

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <div className="content">
         <Switch> 
          <Route exact path='/'> 
            <Home/>
          </Route>
          <Route path='/create'> 
            <Create/>
          </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
