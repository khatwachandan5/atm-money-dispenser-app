import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Paper from '@material-ui/core/Paper';
import { Amount } from './components/form';
import { Display } from './components/display';

class App extends React.Component {
  constructor() {
    super();
    this.state = { notes: 0, amount: 0 };
  }

  setAmount = (amount) => {
    this.setState({ amount });
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <div className="row aligned">
          <Paper >
            <Amount getAmount={(amount) => this.setAmount(amount)} />
            <br />
            <Display getBreakup={this.state.amount} />
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;