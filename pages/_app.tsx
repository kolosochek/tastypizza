// redux
import type { AppProps } from '../node_modules/next/app'
import { Provider } from 'react-redux'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import store from '../src/redux/store'
// css
import '../styles/cssReset.scss'
import '../styles/fonts.scss'
import '../styles/global.scss'

const colors = {
  bg: {},
}
const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )

}

