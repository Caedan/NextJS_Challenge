import styles from '../styles/Invoicing.module.css'
import Head from 'next/head'

export default function Home() {
  return (
      <>
          <Head>
              <title>Ember Ltd | Invoicing</title>
              <meta property="og:title" content="Invoices" key="Invoices" />
          </Head>

          <div className={styles.container}>
              <div className={styles.textSection}>
                  <h1 className={styles.text}>Invoices that get <br /> you paid on time.</h1>
                  <button className={styles.btn}>Send better invoices now &#8594;</button>
              </div>

              <img src="/Invoicing.png" alt="Invoice" className={styles.sample} />
          </div>
      </>
  )
}
