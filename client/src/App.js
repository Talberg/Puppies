import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Container } from 'reactstrap';
import BG from './components/BG/index'
import Head from './components/Head/Head'

function App() {
  return (
    
      <Router>
        <>
        
          <Head></Head>
      
            <Switch>
              <Route exact path="/"  ><Home></Home></Route>
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
         
         
          
        </>
      </Router>
      
  );
}

export default App;
