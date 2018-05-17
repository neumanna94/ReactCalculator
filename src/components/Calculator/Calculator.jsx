import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputField: '',
    }
  }

  handleClick(input){
    var newInputField = this.state.inputField;
    if(input === 'AC'){
      newInputField = '';
    } else {
      newInputField = newInputField + input;
    }

    this.setState({inputField: newInputField});
  }
  handleChange(input){
    let newInputField = "";
    newInputField = input.target.value;
    this.setState({inputField: newInputField});
  }
  handleCalculationSubmission(){
    props.inputFieldToCalculate({inputFieldToCalculate: this.state.inputField});
  }
  render(){
    return (
      <calculator>
        <style jsx>{`
          calculator {
          display: grid;
          margin-right: 21%;
          margin-left: 20%;
          box-shadow: 0 0  2px black;
          grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
          grid-gap: 0.2%;
          background-color: #fff;
          color: #444;
          }
          .box {
            background-color: #D3D3D3;
            color: #252525;
            margin-bottom: 2%;
            margin-left: 1%;
            padding: 10px;
            font-size: 100%;
            text-align: center;
            font-family: Georga;
          }
          .number {
            background-color: #F5F5F5;
          }
          .equal {
            background-color: #5286EC;
          }
          .inputField {
            grid-column-start: 1;
            grid-column-end: 8;
            box-shadow: 0 0  2px black;
          }
          .box:hover {
            opacity: 0.85;
            box-shadow: 0 0 10px black;
            cursor: pointer;
          }
          input {
            width: 100%;
          }
        `}</style>
        <div className="inputField"><input type='text' value={this.state.inputField} onChange={this.handleChange.bind(this)} /></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box" onClick={()=>this.handleClick('!')}>x!</div>
        <div className="box" onClick={()=>this.handleClick('(')}>(</div>
        <div className="box" onClick={()=>this.handleClick(')')}>)</div>
        <div className="box" onClick={()=>this.handleClick('%')}>%</div>
        <div className="box" onClick={()=>this.handleClick('AC')}>AC</div>
        <div className="box"></div>
        <div className="box" onClick={()=>this.handleClick('sin')}>sin</div>
        <div className="box" onClick={()=>this.handleClick('ln')}>ln</div>
        <div className="box number" onClick={()=>this.handleClick(7)}>7</div>
        <div className="box number" onClick={()=>this.handleClick(8)}>8</div>
        <div className="box number" onClick={()=>this.handleClick(9)}>9</div>
        <div className="box" onClick={()=>this.handleClick('/')}>/</div>
        <div className="box" onClick={()=>this.handleClick('pi')}>pi</div>
        <div className="box" onClick={()=>this.handleClick('cos')}>cos</div>
        <div className="box" onClick={()=>this.handleClick('log')}>log</div>
        <div className="box number" onClick={()=>this.handleClick(4)}>4</div>
        <div className="box number" onClick={()=>this.handleClick(5)}>5</div>
        <div className="box number" onClick={()=>this.handleClick(6)}>6</div>
        <div className="box" onClick={()=>this.handleClick('*')}>x</div>
        <div className="box" onClick={()=>this.handleClick('^')}>^</div>
        <div className="box" onClick={()=>this.handleClick('tan')}>tan</div>
        <div className="box" onClick={()=>this.handleClick('sqrt')}>sqrt</div>
        <div className="box number" onClick={()=>this.handleClick(1)}>1</div>
        <div className="box number" onClick={()=>this.handleClick(2)}>2</div>
        <div className="box number" onClick={()=>this.handleClick(3)}>3</div>
        <div className="box" onClick={()=>this.handleClick('-')}>-</div>
        <div className="box" onClick={()=>this.handleClick('')}></div>
        <div className="box"></div>
        <div className="box" onClick={()=>this.handleClick('')}></div>
        <div className="box number" onClick={()=>this.handleClick(0)}>0</div>
        <div className="box number" onClick={()=>this.handleClick('.')}>.</div>
        <div className="box equal" onClick={()=>this.handleCalculationSubmission()}>=</div>
        <div className="box" onClick={()=>this.handleClick('+')}>+</div>
      </calculator>
    )
  }
}

Calculator.propTypes = {
  inputFieldToCalculate: PropTypes.string
}

export default Calculator;
