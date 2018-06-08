import React from 'react'
import {App} from 'src/App'

describe('App', () => {
  let wrapper
  let getRandomPhrases

  beforeEach(() => {
    getRandomPhrases = jest.fn()
    wrapper = shallow(<App getRandomPhrases={getRandomPhrases}/>)
  })

  it('gets 5 random phrases on creation', () => {
    expect(getRandomPhrases).toHaveBeenCalledWith(5)
  })
})