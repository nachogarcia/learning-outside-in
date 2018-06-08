import randomPhraseResponse from 'src/test/fixtures/randomPhraseResponse'
import mountApp from 'src/test/setupAcceptanceTests'

describe('App', () => {
  let app

  beforeEach(async () => {
    app = await mountApp()
  })

  it('shows some random Chuck Norris phrases after clicking its button', () => {
    const phraseTexts = randomPhraseResponse.value.map(phrase => phrase.value)
    const phraseComponents = app.find('.phrase')

    phraseTexts.forEach((phraseText, index) => {
      const text = phraseComponents.at(index).text()
      expect(text).toEqual(phraseText)
    })
  })
})