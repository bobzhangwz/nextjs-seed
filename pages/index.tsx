import {NextPage} from 'next'
import './style.scss'
import Link from 'next/link'
import Hello from '../components/Hello'

const Home: NextPage<{ userAgent: string }> = ({userAgent}): JSX.Element => (
  <div>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <Link href="/hello/about" replace={true}>
      <a>here</a>
    </Link>
    <p/>
    <Link href="/test?name=haha" as="/test/haha" replace={false}>
      <a>test replace false</a>
    </Link>
    <Hello name="hehe" enthusiasmLevel={2}/>
  </div>
)

Home.getInitialProps = async ({req}): Promise<{ userAgent: string }> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return {userAgent}
}

export default Home