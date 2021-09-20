import React from 'react';
import './App.css';
//import cn from 'classnames';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.secondRef = React.createRef();
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    }
  }

  winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  newGame = () => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ count: 0 });
  }

  winner = () => {
    let s = (this.state.count % 2 === 0) ? 'X' : 'O';
    for (let i = 0; i < 8; i++) {
      let line = this.winLines[i];
      if (this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s) {
        setTimeout(() => {
          alert(s + '  победил:) !!!');
        }, 300)
      }
    }
  }

  changeColor = () => {
    if (this.state.squares[4] !== null) {
      this.myRef.current.className = 'squares2'
    };
    if (this.state.squares[5] !== null) {
      this.secondRef.current.className = 'squares3'
    };
  }

  hendlyClick = event => {
    let data = event.target.getAttribute('data');
    let currentSquare = this.state.squares;
    if (currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
    } else {
      alert('так нельзя, motherFucker!!!!')
    }
    this.setState({ squares: currentSquare });
    this.setState({ count: this.state.count + 1 });
    this.winner();
    this.changeColor();
  }

  render() {
    return (
      <>
        <div>
          < div className='newGame' onClick={this.newGame}>новая игра</div>
        </div>
        < div className="krest" >
          <div className="squares" ref={this.secondRef} onClick={this.hendlyClick} data='0'>{this.state.squares[0]}</div>
          <div className="squares" onClick={this.hendlyClick} data='1'>{this.state.squares[1]}</div>
          <div className="squares" onClick={this.hendlyClick} data='2'>{this.state.squares[2]}</div>
          <div className="squares" onClick={this.hendlyClick} data='3'>{this.state.squares[3]}</div>
          <div className="squares" onClick={this.hendlyClick} data='4'>{this.state.squares[4]}</div>
          <div className="squares" onClick={this.hendlyClick} data='5'>{this.state.squares[5]}</div>
          <div className="squares" onClick={this.hendlyClick} data='6'>{this.state.squares[6]}</div>
          <div className="squares" onClick={this.hendlyClick} data='7'>{this.state.squares[7]}</div>
          <div className="squares" ref={this.myRef} onClick={this.hendlyClick} data='8'>{this.state.squares[8]}</div>
        </div >
      </>
    );

  }
}

export default App;