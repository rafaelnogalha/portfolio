import Head from 'next/head'
import Image from 'next/image'

import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage | Nogalha</title>        
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋Hey, welcome</span>
          <h1>This is<span> Rafael's Nogalha</span> world code.</h1>
          <p>
            Be my Guest.<span> Welcome!</span>
          </p>
        </section>
        <Image src="/profile_home_pic.png" alt="home pic" width="600" height="600"/>
      </main>
    </>
  )
}

