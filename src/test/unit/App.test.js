import React from 'react'
import { App, mapStateToProps } from 'src/App'
import Phrase from 'src/components/Phrase'
import randomPhrases from 'src/test/fixtures/randomPhrases'

describe('App', () => {
  let wrapper
  let getRandomPhrases

  beforeEach(() => {
    getRandomPhrases = jest.fn()
    wrapper = shallow(<App phrases={randomPhrases} getRandomPhrases={getRandomPhrases}/>)
  })

  it('gets 5 random phrases on creation', () => {
    expect(getRandomPhrases).toHaveBeenCalledWith(5)
  })

  it('maps state to props', () => {
    const state = {
      phrase: {
        list: randomPhrases,
      },
    }
    const props = mapStateToProps(state)

    expect(props.phrases).toEqual(state.phrase.list)
  })

  it('shows phrases', () => {
    const phraseComponents = wrapper.find(Phrase)

    randomPhrases.forEach((phrase, index) => {
      const phraseComponent = phraseComponents.at(index)
      expect(phraseComponent.prop('joke')).toEqual(phrase.joke)
    })
  })
})