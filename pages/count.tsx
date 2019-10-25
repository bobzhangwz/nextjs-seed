import {NextPage} from 'next'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {StoreState} from '../components/types'
import * as actions from '../components/actions'

interface Props {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const countPage: NextPage<Props> = ({count, onIncrement, onDecrement}) => {
  return <Counter value={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
}

function mapStateToProps({ count }: StoreState) {
  return { count }
}

function mapDispatchToProps(dispatch: Dispatch<actions.CountAction>) {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(countPage)
