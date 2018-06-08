import React from 'react'
import MockAdapter from 'axios-mock-adapter'
import * as axios from 'axios'
import randomPharseResponse from 'src/test/fixtures/randomPharseResponse'
import { API_URL } from 'src/config'

function mockApi () {
  const axiosMocked = new MockAdapter(axios)

  axiosMocked.onGet(`${API_URL}/random/1`).reply(200, randomPharseResponse)
}

export default mountApp