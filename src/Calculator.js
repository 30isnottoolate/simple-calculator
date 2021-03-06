import React from 'react';
import './Calculator.css';

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
    this.setState({
      formula: "",
      display: "0",
      prevIn: "",
      mode: "default",
      isFloat: false
    });
  }
  
  handleNumber(event) {
    this.setState((prevState) => {
      if (event.target.innerText !== "0") {
        if (prevState.mode === "default" || prevState.mode === "new") {
          return {
            display: event.target.innerText,
            prevIn: event.target.id,
            mode: "add"
          }
        } else if (prevState.mode === "eval") {
          return {
            formula: "",
            display: event.target.innerText,
            prevIn: event.target.id,
            mode: "add"
          }
        } else if (prevState.mode === "add" && prevState.display.length < 20) {
          return {
            display: prevState.display + event.target.innerText,
            prevIn: event.target.id,
            mode: "add"
          }
        }
      } else {
        if (prevState.mode === "new") {
          return {
            display: event.target.innerText,
            prevIn: event.target.id,
            mode: "default"
          }
        } else if (prevState.mode === "eval") {
          return {
            formula: "",
            display: event.target.innerText,
            prevIn: event.target.id,
            mode: "default"
          }
        } else if (prevState.mode === "add" && prevState.display.length < 20) {
          return {
            display: prevState.display + event.target.innerText,
            prevIn: event.target.id,
            mode: "add"
          }
        }
      }
    });
  }
  
  handleDecimal() {
    this.setState((prevState) => {
      if (prevState.mode === "default" || prevState.mode === "new") {
        return {
          display: "0.",
          prevIn: "decimal",
          mode: "add",
          isFloat: true
        }
      } else if (prevState.mode === "add" && !prevState.isFloat && 
      prevState.display.length < 19) {
        return {
          display: prevState.display + ".",
          prevIn: "decimal",
          isFloat: true
        }
      } else if (prevState.mode === "eval") {
        return {
          formula: "",
          display: "0.",
          prevIn: "decimal",
          mode: "add",
          isFloat: true
        }
      }
    });
  }

  handleOperator(event) {
    this.setState((prevState) => {
      if (prevState.mode === "default" || prevState.mode === "add") {
        return {
          formula: prevState.formula + prevState.display + event.target.innerText,
          prevIn: event.target.id,
          mode: "new",
          isFloat: false
        }
      } else if (prevState.mode === "new") {
        if (prevState.formula.substr(-2, 1) !== "+" && prevState.formula.substr(-2, 1) !== "*" &&
        prevState.formula.substr(-2, 1) !== "/") {
          if (event.target.id !== "subtract") {
            return {
              formula: prevState.formula.slice(0, -1) + event.target.innerText,
              prevIn: event.target.id
            }
          } else if (event.target.id === "subtract" && prevState.prevIn !== "subtract") {
            return {
              formula: prevState.formula + event.target.innerText,
              prevIn: event.target.id
            }
          } else if (event.target.id === "subtract" && prevState.prevIn === "subtract") {
            return {
              formula: prevState.formula.slice(0, -1) + "+",
              prevIn: "add"
            }
          }
        } else if (prevState.formula.substr(-2, 1) === "+" || prevState.formula.substr(-2, 1) === "*" ||
        prevState.formula.substr(-2, 1) === "/") {
          if (event.target.id !== "subtract") {
            return {
              formula: prevState.formula.slice(0, -2) + event.target.innerText,
              prevIn: event.target.id
            }
          }
        }
      } else if (prevState.mode === "eval") {
        return {
          formula: prevState.display + event.target.innerText,
          prevIn: event.target.id,
          mode: "new"
        }
      }
    });
  }
  
  handleEquals() {
    this.setState((prevState) => {
      if (prevState.mode === "default" || prevState.mode === "add") {
        return {
          formula: prevState.formula + prevState.display + "=",
          display: eval(prevState.formula + prevState.display),
          prevIn: "equals",
          mode: "eval",
          isFloat: false
        }
      } else if (prevState.mode === "new") {
        if (prevState.formula.substr(-2, 1) !== "+" && prevState.formula.substr(-2, 1) !== "*" &&
        prevState.formula.substr(-2, 1) !== "/") {
          return {
            formula: prevState.formula.slice(0, -1) + "=",
            display: eval(prevState.formula.slice(0, -1)),
            prevIn: "equals",
            mode: "eval",
            isFloat: false
          }
        } else if (prevState.formula.substr(-2, 1) === "+" || prevState.formula.substr(-2, 1) === "*" ||
        prevState.formula.substr(-2, 1) === "/") {
          return {
            formula: prevState.formula.slice(0, -2) + "=",
            display: eval(prevState.formula.slice(0, -2)),
            prevIn: "equals",
            mode: "eval",
            isFloat: false
          }
        }
      }
    })
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

export default Calculator;
