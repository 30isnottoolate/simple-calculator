import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class Calculator extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="formula" className="displays">123</div>
        <div id="display" className="displays">123</div>
        <div id="buttons">
          <button id="zero" className="blues">0</button>
          <button id="one" className="blues">1</button>
          <button id="two" className="blues">2</button>
          <button id="three" className="blues">3</button>
          <button id="four" className="blues">4</button>
          <button id="five" className="blues">5</button>
          <button id="six" className="blues">6</button>
          <button id="seven" className="blues">7</button>
          <button id="eight" className="blues">8</button>
          <button id="nine" className="blues">9</button>
          <button id="decimal" className="blues">.</button>
          <button id="add" className="oranges big-butt">+</button>
          <button id="subtract" className="oranges">-</button>
          <button id="multiply" className="oranges">*</button>
          <button id="divide" className="oranges">/</button>
          <button id="clear" className="oranges">C</button>
          <button id="equals" className="oranges big-butt">=</button>
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<Calculator/>);
