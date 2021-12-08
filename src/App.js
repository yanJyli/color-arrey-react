import React, { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      color: ''
    }
  }

  handleChangeColor = () => {
    const timerId = setInterval(() => { 
      this.setState({ color: ['red', 'yellow', 'pink', 'green', 'blue'][Math.floor(Math.random() * 5) ]}); 

      if (this.state.color === 'yellow') {
        this.setState({ color:  'yellow'})
        clearInterval(timerId)
      }
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.color === 'yellow') { 
      alert ('YELLOW!')
    }
  }

  render() {
    const { color } = this.state;
    return <button style={{backgroundColor : color}} onClick={this.handleChangeColor}>Click me!</button>
  }
}