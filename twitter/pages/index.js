import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Hello </h1>
        <nav> 
          <a href='/timeline'>
            timeline
        </a>
        </nav>
      </main>
      <style jsx>{`
        nav{
          font-size: 2rem;
          text-align: center;
          color: blue;
        }
      `}
      </style>
    </div>
  )
}
