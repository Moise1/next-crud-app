import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {app} from '../firebaseConfig';

 export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXT CRUD APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

