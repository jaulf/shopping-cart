import React, { Component } from 'react';
import {
BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

export default class App extends Component {
  render() {
    return (
      
      
<section id="main"> 
       <BrowserRouter>
            
              <Navbar/>
                <Switch>
                    <Route path="/Cart" component={Cart}/>
                    <Route path="/" component={Home}/>
                  </Switch>
       </BrowserRouter>
</section>
      )
  }
}