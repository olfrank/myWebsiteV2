import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages";
import ContactPage from './pages/ContactForm';
import CVPage from './pages/CVPage';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

function App() {

  return (
    <Router>
      <Route render={({location}) =>(
        <TransitionGroup>
        <CSSTransition key={location.key} timeout={500} classNames="fade">
          <Switch location={location}>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={ContactPage} exact />
            <Route path="/cv" component={CVPage} exact />
          </Switch>
        </CSSTransition>
      </TransitionGroup>

      )} />
      </Router>
      
      
    
  );
}

export default App;
