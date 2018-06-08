import { createStore } from 'redux'
import initialState from 'src/store/initialState'
import reducer from 'src/store/reducers'

export default createStore(reducer, initialState)