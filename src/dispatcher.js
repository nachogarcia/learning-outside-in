import factory from 'src/infrastructure/Factory'
import { GET_RANDOM_PHRASES } from 'src/store/reducers/actionTypes'

const phraseService = factory.phraseService

export default function dispatcher(dispatch) {
  async function getRandomPhrases(numberOfPhrases) {
    const phrases = await phraseService.getRandomPhrases(numberOfPhrases)
    dispatch({
      type: GET_RANDOM_PHRASES,
      payload: phrases,
    })
  }

  return {
    getRandomPhrases,
  }
}