import React, { Component } from 'react'
import {connect} from 'react-redux'
import Phrase from 'src/components/Phrase'
import dispatcher from 'src/dispatcher'
import './App.css'

export class App extends Component {
  async componentDidMount() {
    await this.props.getRandomPhrases(5)
  }

  render() {
    const phrases = this.props.phrases.map(phrase => <Phrase key={phrase.id} joke={phrase.joke}/>)

    return (
      <div className="App">
        {phrases}
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    phrases: state.phrase.list
  }
}

export default connect(mapStateToProps, dispatcher)(App)
