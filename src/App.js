import React, { Component } from 'react';
import './App.css';
import DailyGoalWidget from './DailyGoal/component/DailyGoalWidget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DailyGoalWidget />
      </div>
    );
  }
}

export default App;
