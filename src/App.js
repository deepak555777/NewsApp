import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
//import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
         <NavBar/> 
         <Switch>
         <Route  path="/general"><News key="general" apikey={this.apiKey}  pagesize={5} category='general'/>  </Route>
         <Route  path="/sports"><News key="sports" apikey={this.apiKey}  pagesize={5} category='sports'/>  </Route>
         <Route  path="/health" ><News key="health" apikey={this.apiKey}  pagesize={5} category='health'/>  </Route>
         <Route  path="/business"> <News key="business" apikey={this.apiKey}  pagesize={5} category='business'/>  </Route>
         <Route  path="/technology"> <News key="technology" apikey={this.apiKey}  pagesize={5} category='technology'/> </Route>
         <Route  path="/entertainment"> <News key="entertainment" apikey={this.apiKey}  pagesize={5} category='entertainment'/>  </Route>
         <Route  path="/science"><News key="science" apikey={this.apiKey} pagesize={5} category='science'/>  </Route>
      </Switch>
      </Router>
    
      </div>
    )
  }
}
