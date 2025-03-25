import { React, Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export class Home extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        console.log('PROPS:', prevProps.numberToIncrement)
        return { counter: prevState.counter + prevProps.numberToIncrement }
      },
      () => {
        console.log('Post:', this.state.counter)
      })
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  numberToIncrement: PropTypes.number,
}











