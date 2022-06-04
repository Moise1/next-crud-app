import styles from '../styles/Home.module.css'
import Head from 'next/head';

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Login</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
