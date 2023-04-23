import ContextProvider from ' @/context/ContextProvider'
import ' @/styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}