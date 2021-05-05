import { createGlobalStyle, ThemeProvider } from 'styled-components'
import OrdersProvider from '../context/orders'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    &:focus {
        outline: none;
    }
  }
  
  body {
    font-family: 'Barlow', sans-serif;
    box-sizing: border-box;
    height: 100vh;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const theme = {
  dark: {
    primary: "#",
    secondary: "#",
  },
  light: {
    primary: "#",
    secondary: "#",
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <OrdersProvider>
          <Component {...pageProps} />
        </OrdersProvider>
      </ThemeProvider>
    </>
  )
}
