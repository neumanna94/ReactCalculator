import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AlgCalculator from './AlgCalculator/AlgCalculator';
import Calculator from './Calculator/Calculator';
import History from './History/History';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div>
        <style jsx global>{`
          body {
            font-family: Helvetica;
            color: black;
            background-color: white;
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path ='/' component={Calculator} />
          <Route exact path ='/Calculator' component={Calculator} />
          <Route exact path ='/AlgCalculator' component={AlgCalculator} />
          <Route exact path ='/History' component={History} />
          <Route component = {Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }

}

export default App;
