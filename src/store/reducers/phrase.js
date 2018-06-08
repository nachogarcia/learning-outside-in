import { GET_RANDOM_PHRASES } from 'src/store/reducers/actionTypes'

const phrase = (state, action) => {
  const newState = { ...state }
  switch (action.type) {
    case GET_RANDOM_PHRASES:
      newState.list = action.payload
      return newState

    default:
      return newState
  }
}
export default phrase