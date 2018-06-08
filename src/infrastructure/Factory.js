import PhraseService from 'src/services/PhraseService'

class Factory {
  constructor(){
    this.phraseService = new PhraseService()
  }
}

export default new Factory()