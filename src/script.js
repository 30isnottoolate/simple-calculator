import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class Calculator extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="formula">123</div>
        <div id="display">123</div>
        <div id="buttons">
          <button id="zero">0</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="decimal">.</button>
          <button id="add">+</button>
          <button id="subtract">-</button>
          <button id="multiply">*</button>
          <button id="divide">/</button>
          <button id="clear">C</button>
          <button id="equals">=</button>
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<Calculator/>);
