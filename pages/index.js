import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Caffeine, Code & Chill</title>
        <meta name="#" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Caffeine, Code & <a href="#">Chill.</a>
        </h1>
        <p className={styles.findButton}>
          Find Coffee Shops With Air Con Near Me
        </p>
      </main>
    </div>
  );
}
