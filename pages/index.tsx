import {NextPage} from 'next'
import './style.scss'

const Home: NextPage<{ userAgent: string }> = ({userAgent}): JSX.Element => (
  <h1>Hello world! - user agent: {userAgent}</h1>
)

Home.getInitialProps = async ({req}): Promise<{ userAgent: string }> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return {userAgent}
}

export default Home