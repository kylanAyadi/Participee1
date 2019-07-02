import React,{ Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router} from "react-router-dom";
import Home from "./components/home.component";
import DefaultLayout from './components/layout.components/layout.component';


class App extends Component {

  render(){

    return (
      <Router>
          <DefaultLayout path="/" exact component = {Home}/>
          <DefaultLayout path="/home" component = {Home}/>
      </Router>
    );
  }
}

export default App;
