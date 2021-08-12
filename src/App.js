
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import CountryDetails from "./Component/CountryDetails/CountryDetails";
import CountryHome from "./Component/CountryHome/CountryHome";

function App() {
    
  
    
  return (
    <Router>
    <Switch>
      {/* <Route path='/friend/:id'>
       <FriendDetail/>
      </Route>
      <Route exact path='/'>
      <Home/>
      </Route> */}
      {/* <Route path='*'>
        <NoMatch/>
      </Route> */}
      <Route exact path='/'>
         <CountryHome/>
      </Route>
      <Route path='/name/:id'>
         <CountryDetails/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
