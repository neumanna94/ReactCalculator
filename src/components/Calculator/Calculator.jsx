import React from 'react';

class Calculator extends React.Component {
  constructor(){
    super()
    this.state = {
      inputField: ''
    }
  }

  handleClick(e){
    let newInputField = this.state.inputField + e;
    this.setState(newInputField)
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
        `}</style>
        <div className="inputField">inputField</div>
        <div className="box">Rad</div>
        <div className="box"></div>
        <div className="box">x!</div>
        <div className="box">(</div>
        <div className="box">)</div>
        <div className="box">%</div>
        <div className="box">AC</div>
        <div className="box">Inv</div>
        <div className="box">sin</div>
        <div className="box">ln</div>
        <div className="box number">7</div>
        <div className="box number">8</div>
        <div className="box number">9</div>
        <div className="box">/</div>
        <div className="box">pi</div>
        <div className="box">cos</div>
        <div className="box">log</div>
        <div className="box number">4</div>
        <div className="box number">5</div>
        <div className="box number">6</div>
        <div className="box">x</div>
        <div className="box">e</div>
        <div className="box">tan</div>
        <div className="box">sqrt</div>
        <div className="box number">1</div>
        <div className="box number">2</div>
        <div className="box number">3</div>
        <div className="box">-</div>
        <div className="box"></div>
        <div className="box">EXP</div>
        <div className="box">x^y</div>
        <div className="box number">0</div>
        <div className="box number">.</div>
        <div className="box equal">=</div>
        <div className="box">+</div>
      </calculator>
    )
  }
}


export default Calculator;
