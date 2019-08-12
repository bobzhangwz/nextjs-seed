import {useRouter} from 'next/router'


const Comment = (): JSX.Element => {
  const router = useRouter()
  const { name} = router.query
  const world = 'world'

  return (
      <>
          <h1>Hello: {name} {world}</h1>
      </>
  )
}

export default Comment