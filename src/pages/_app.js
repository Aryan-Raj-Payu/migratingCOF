import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import { ToastContainer, toast } from 'react-toastify'

import 'styles/base/global.scss'
import 'react-toastify/dist/ReactToastify.min.css'

const isInternetWorking = () => window.navigator.onLine

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head></Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IN',
          url: '',
          site_name: 'Checkout Finance'
        }}
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
        className="customToast"
        pauseOnHover
      />
      <Component {...pageProps}>
        {!isInternetWorking &&
          toast('Check your internet connection', {
            position: 'bottom-center',
            autoClose: false,
            draggable: true
          })}
      </Component>
    </>
  )
}

export default App
