// redux
import { Provider } from 'react-redux'
import store from '../store.js'
// css
import '../styles/globals.scss'
import '../styles/fonts.css'

function App({ Component, pageProps }) {
  return <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
}

export default App
