import * as React from 'react'
import './Hello.scss'

export interface Props {
  name: string
  enthusiasmLevel?: number
}

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!')
}

function Hello({ name, enthusiasmLevel = 1 }: Props): JSX.Element {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

export default Hello


