// We can use this page to keep state when navigating between pages
// Also alters global styles
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
