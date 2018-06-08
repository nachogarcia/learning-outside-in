import MockAdapter from 'axios-mock-adapter'
import * as axios from 'axios'
import { API_URL } from 'src/config'
import factory from 'src/infrastructure/Factory'
import randomPhraseResponse from 'src/test/fixtures/randomPhraseResponse'
import randomPhrases from 'src/test/fixtures/randomPhrases'

const phraseService = factory.phraseService
const axiosMocked = new MockAdapter(axios)

describe('Phrase Service', () => {
  it('gets random phrases', async () => {
    const numberOfPhrases = 5
    axiosMocked.onGet(`${API_URL}/jokes/random/${numberOfPhrases}`).reply(200, randomPhraseResponse)

    const phrases = await phraseService.getRandomPhrases(numberOfPhrases)

    expect(phrases).toEqual(randomPhrases)
  })
})