import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LifeInsurance from './components/LifeInsurance';
import Home from './components/Home';
import Nav from './components/Nav';
import GeneralInsurance from './components/GeneralInsurance';
import Loan from './components/Loan';
import PersonalLoan from './components/PersonalLoan';
import BusinessLoan from './components/BusinessLoan';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/insurance/life-insurance.aspx" component={LifeInsurance}/>
          <Route path="/insurance/general-insurance.aspx" component={GeneralInsurance}/>
          <Route path="/home-loan/index.aspx" component={Loan}/>
          <Route path="/personal-loan/personal-loan-for-wedding.aspx" component={PersonalLoan}/>
          <Route path="/business-loan/self-employed-business-loan/index.aspx" component={BusinessLoan}/>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
