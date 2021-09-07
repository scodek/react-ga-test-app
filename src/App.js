import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
 

function usePageViews(){
  let location = useLocation();
  //const TRACKING_ID = "UA-206872004-1"; 
  const TRACKING_ID = "UA-206865039-1"; 
  
  ReactGA.initialize(TRACKING_ID);

  React.useEffect(() => {
    if(!window.GA_INITIALIZED){
      ReactGA.initialize(TRACKING_ID);
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);


    console.log("this is working: ", window.location.pathname + window.location.search);
    //ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  

  
  
}

function App() {

  usePageViews();

  return (
    <>
         <div>
            <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
          </div>
          <Switch>
          <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Home} exact/>
          </Switch>
        
      </>
  );
}

export default App;
