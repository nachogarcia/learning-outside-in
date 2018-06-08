import React from 'react'
import { Provider } from 'react-redux'
import MockAdapter from 'axios-mock-adapter'
import * as axios from 'axios'
import randomPharseResponse from 'src/test/fixtures/randomPharseResponse'
import { API_URL } from 'src/config'
import App from '../App'
import store from 'src/store'

function mockApi() {
  const axiosMocked = new MockAdapter(axios)

  axiosMocked.onGet(`${API_URL}/random/1`).reply(200, randomPharseResponse)
}

mockApi()

async function mountApp() {
  const app = mount(<Provider store={store}>
    <App/>
  </Provider>)
  await flushPromises()
  app.update()
  return app
}

export default mountApp