import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMinus from 'material-ui/svg-icons/content/undo';
import '../css/dailyGoal.css';




class CommitPicker extends Component {

  constructor() {
    super();
    this.state = {
        codeBlock: 0,
        readBlock: 0,
        mathBlock: 0,
    };
    this.codeAdd = this.codeAdd.bind(this);
    this.codeMinus = this.codeMinus.bind(this);
    this.readAdd = this.readAdd.bind(this);
    this.readMinus = this.readMinus.bind(this);
    this.mathAdd = this.mathAdd.bind(this);
    this.mathMinus = this.mathMinus.bind(this);
  };

  codeAdd() {
    this.setState({codeBlock: this.state.codeBlock + 1});
  }

  codeMinus() {
    if (this.state.codeBlock - 1 < 0) {
      this.setState({codeBlock: 0});
    } else {
      this.setState({codeBlock: this.state.codeBlock - 1});
    }
  }

  readAdd() {
    this.setState({readBlock: this.state.readBlock + 1});
  }

  readMinus() {
    if (this.state.readBlock - 1 < 0) {
      this.setState({readBlock: 0});
    } else {
      this.setState({readBlock: this.state.readBlock - 1});
    }
  }

  mathAdd() {
    this.setState({mathBlock: this.state.mathBlock + 1});
  }

  mathMinus() {
    if (this.state.mathBlock - 1 < 0) {
      this.setState({mathBlock: 0});
    } else {
      this.setState({mathBlock: this.state.mathBlock - 1});
    }
  }

  render() {
    return (
      <div className="container">

        <div className="code">
          <div className="codeIcon"></div>
          <div className="codeAddMinus">
            <div>
              <FloatingActionButton className="add" onClick={this.codeAdd}>
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <div className="todayCode">{this.state.codeBlock}</div>
            <div>
              <FloatingActionButton className="minus" onClick={this.codeMinus}>
                <ContentMinus />
              </FloatingActionButton>
            </div>
          </div>
        </div>

        <div className="read">
          <div className="readIcon"></div>
          <div className="readAddMinus">
            <div>
              <FloatingActionButton className="add" onClick={this.readAdd}>
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <div className="todayRead">{this.state.readBlock}</div>
            <div>
              <FloatingActionButton className="minus" onClick={this.readMinus}>
                <ContentMinus />
              </FloatingActionButton>
            </div>
          </div>
        </div>

        <div className="math">
          <div className="mathIcon"></div>
          <div className="mathAddMinus">
            <div>
              <FloatingActionButton className="add" onClick={this.mathAdd}>
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <div className="todayMath">{this.state.mathBlock}</div>
            <div>
              <FloatingActionButton className="minus" onClick={this.mathMinus}>
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
