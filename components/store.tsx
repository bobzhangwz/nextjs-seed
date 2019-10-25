import {createStore} from 'redux'
import {MakeStore} from 'next-redux-wrapper'
import Count from './reducers/index'
import {StoreState} from './types'

export const makeStore: MakeStore = (initialState: StoreState) => {
  return createStore(Count, initialState)
}
