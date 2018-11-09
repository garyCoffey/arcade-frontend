import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import AppNav from './components/AppNav/AppNav.js';
import { Route, Redirect, Switch } from 'react-router'
import Login from './components/Login/Login'

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <AppNav handleNavClick={(clickedItem) => console.log(clickedItem)} />
            <hr /> */}
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/articles/:articleID" component={ArticlePage} />
            <Route exact path="/sections/:sectionID" component={SectionPage} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;