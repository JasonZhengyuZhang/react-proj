import React, { Component } from 'react';
import CommitPicker from './CommitPicker';
import '../css/dailyGoal.css';

class DailyGoalWidget extends Component {
  render() {
    return (
      <div>
        <CommitPicker />
      </div>
    );
  }
}

export default DailyGoalWidget;
