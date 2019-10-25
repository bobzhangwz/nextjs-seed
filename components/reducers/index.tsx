import {Reducer} from 'redux'
import { CountAction } from '../actions'
import { StoreState } from '../types/index'
import { INCREMENT, DECREMENT } from '../constants/index'

const Count: Reducer<StoreState, CountAction> = (state = {count : 0}, action): StoreState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: Math.max(1, state.count - 1) }
    default:
      return state
  }
}

export default Count

// function count(state: StoreState, action: CountAction): StoreState {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 }
//     case DECREMENT:
//       return { ...state, count: Math.max(1, state.count - 1) }
//   }
//   return state
// }