import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    console.log('increment', state.count)
    return Object.assign({}, state, {
      count: !state.count,
    })
  }
  return state
}

const initialState = { count: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore