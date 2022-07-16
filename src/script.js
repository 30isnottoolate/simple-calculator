import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "", //upper display containing the math expression
      display: "0", //lower display containing the input number
      prevIn: "", //previously clicked button
      mode: "default", // modes: default, new, add, eval
      isFloat: false //is the input number a float
    };
    
    this.handleClear = this.handleClear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }
  
  handleClear() {
  }
  
  handleNumber(event) {
  }
  
  handleDecimal() {
  }

  handleOperator(event) {
  }
  
  handleEquals() {
  }

  render() {
    return (
      <div id="app">
        <div id="displays">
          <div id="formula" className="displays">{this.state.formula}</div>
          <div id="display" className="displays">{this.state.display}</div>
        </div>
        <div id="buttons">
        <button id="zero" className="blues" onClick={this.handleNumber}>0</button>
          <button id="one" className="blues" onClick={this.handleNumber}>1</button>
          <button id="two" className="blues" onClick={this.handleNumber}>2</button>
          <button id="three" className="blues" onClick={this.handleNumber}>3</button>
          <button id="four" className="blues" onClick={this.handleNumber}>4</button>
          <button id="five" className="blues" onClick={this.handleNumber}>5</button>
          <button id="six" className="blues" onClick={this.handleNumber}>6</button>
          <button id="seven" className="blues" onClick={this.handleNumber}>7</button>
          <button id="eight" className="blues" onClick={this.handleNumber}>8</button>
          <button id="nine" className="blues" onClick={this.handleNumber}>9</button>
          <button id="decimal" className="blues" onClick={this.handleDecimal}>.</button>
          <button id="add" className="oranges" onClick={this.handleOperator}>+</button>
          <button id="subtract" className="oranges" onClick={this.handleOperator}>-</button>
          <button id="multiply" className="oranges" onClick={this.handleOperator}>*</button>
          <button id="divide" className="oranges" onClick={this.handleOperator}>/</button>
          <button id="clear" className="oranges" onClick={this.handleClear}>C</button>
          <button id="equals" className="oranges" onClick={this.handleEquals}>=</button>
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<Calculator/>);
