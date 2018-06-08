import initialState from 'src/store/initialState'
import { GET_RANDOM_PHRASES } from 'src/store/reducers/actionTypes'
import phraseReducer from 'src/store/reducers/phrase'
import randomPhrases from 'src/test/fixtures/randomPhrases'

describe('Phrase reducer', () => {
  it('stores random phrases', () => {
    const action = {
      type: GET_RANDOM_PHRASES,
      payload: randomPhrases
    }

    const state = phraseReducer(initialState, action)

    expect(state.list).toEqual(randomPhrases)
  })
})