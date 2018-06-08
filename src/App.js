import React, { Component } from 'react'
import {connect} from 'react-redux'
import dispatcher from 'src/dispatcher'
import './App.css'

export class App extends Component {
  async componentDidMount() {
    await this.props.getRandomPhrases(5)
  }

  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    phrases: state.phrases
  }
}

export default connect(mapStateToProps, dispatcher)(App)
