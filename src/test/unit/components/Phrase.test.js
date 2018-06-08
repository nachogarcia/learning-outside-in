import React from 'react'
import Phrase from 'src/components/Phrase'

const joke = 'some joke'

describe('Phrase', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Phrase joke={joke}/>)
  })

  it('displays joke', () => {
    expect(wrapper.contains(joke)).toBe(true)
  })

  it('has correct structure', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})