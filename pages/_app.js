// redux
import { Provider } from 'react-redux'
import store from '../store.js'
// css
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
}

export default MyApp
