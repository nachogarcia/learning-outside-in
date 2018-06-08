import dispatcher from 'src/dispatcher'
import { GET_RANDOM_PHRASES } from 'src/store/reducers/actionTypes'
import factory from 'src/infrastructure/Factory'

const numberOfPhrases = 5
const randomPhrases = ['some', 'random', 'phrases']
const phraseService = factory.phraseService

describe('dispatcher', () => {
  it('gets random phrases', async () => {
    phraseService.getRandomPhrases = jest.fn(() => randomPhrases)
    const dispatch = jest.fn()
    const getRandomPhrases = dispatcher(dispatch).getRandomPhrases
    const expectedDispatch = {
      type: GET_RANDOM_PHRASES,
      payload: randomPhrases
    }

    await getRandomPhrases(numberOfPhrases)

    expect(phraseService.getRandomPhrases).toHaveBeenCalledWith(numberOfPhrases)
    expect(dispatch).toHaveBeenCalledWith(expectedDispatch)
  })
})