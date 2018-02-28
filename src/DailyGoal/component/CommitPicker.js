import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/undo';
import '../css/dailyGoal.css';


class CommitPicker extends Component {
  render() {
    return (
      <div className="container">

        <div className="code">
          <div className="codeIcon"></div>
          <div className="codeAddMinus">
            <div>
              <FloatingActionButton className="add">
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <div className="todayCode"></div>
            <div>
              <FloatingActionButton className="minus">
                <ContentMinus />
              </FloatingActionButton>
            </div>
          </div>
        </div>

        <div className="read">
          <div className="readIcon"></div>
          <div className="readAddMinus">
            <div>
              <FloatingActionButton className="add">
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <div className="todayRead"></div>
            <div>
              <FloatingActionButton className="minus">
                <ContentMinus />
              </FloatingActionButton>
            </div>
          </div>
        </div>

        <div className="math">
          <div className="mathIcon"></div>
          <div className="mathAddMinus">
            <div>
              <FloatingActionButton className="add">
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <div className="todayMath"></div>
            <div>
              <FloatingActionButton className="minus">
                <ContentMinus />
              </FloatingActionButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommitPicker;
