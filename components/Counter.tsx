import * as React from 'react'

export interface Props {
  value: number
  onIncrement: () => void
  onDecrement: () => void
  onIncrementAsync?: () => void
}

export default function Counter({ value, onIncrement, onDecrement, onIncrementAsync }: Props): JSX.Element {
  return (
    <div>
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}
