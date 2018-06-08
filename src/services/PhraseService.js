import * as axios from 'axios'
import { API_URL } from 'src/config'

export default class PhraseService {
  async getRandomPhrases(numberOfPhrases){
    const response = await axios.get(`${API_URL}/jokes/random/${numberOfPhrases}`)
    return response.data.value
  }
}