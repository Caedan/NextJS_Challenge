import '../styles/globals.css'
import Layout from '../components/Layout'

function InvoiceApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default InvoiceApp
