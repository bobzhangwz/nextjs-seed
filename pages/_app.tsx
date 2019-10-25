import App, {AppContext, Container} from 'next/app'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import {Store} from 'redux'
import {makeStore} from '../components/store'

class MyApp extends App<{store: Store}> {

  public static async getInitialProps({Component, ctx}: AppContext) {

    // we can dispatch from here too
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return {pageProps}

  }

  public render() {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
