import Head from 'next/head'
import styles from '../styles/About.module.scss'

export default function About(){
  return(
    <>
      <Head>
        <title>AboutMe | Nogalha</title>
      </Head>
      <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <h1>
          I'm a technician, graduated, in <span>Systems Development</span> from the Federal Institute 
          of Education, Science and Technology of Brasília. Now,
          i'm current student of <span>Computer Science</span> at University of Brasilia,
          i'm 21 years old and learning about clean code with <span>NodeJs</span>, <span>ReactJs</span> and
          <span> NextJs</span>. I have experience with <span>C/C++</span> languages and <span>Python</span>. 
          Everyday, i have been learning about something new. So, let's work together!
        </h1>
      </section>
        {/* <h1>
        I'm a technician, graduated, in <span>Systems Development</span> from the Federal Institute 
        of Education, Science and Technology of Brasília. Now,
        i'm current student of <span>Computer Science</span> at University of Brasilia,
        i'm 21 years old and learning about clean code with <span>NodeJs</span>, <span>ReactJs</span> and
        <span> NextJs</span>. I have experience with <span>C/C++</span> languages and <span>Python</span>. 
        Everyday, i have been learning about something new. So, let's work together!
        </h1> */}
      </main>
    </>
  )
}

// <>
//       <Head>
//         <title>HomePage | Nogalha</title>        
//       </Head>
//       <main className={styles.contentContainer}>
//         <section className={styles.hero}>
//           <span>👋Hey, welcome</span>
//           <h1>This is<span> Rafael's Nogalha</span> world code.</h1>
//           <p>
//             Be my Guest.<span> Welcome!</span>
//           </p>
//         </section>
//         <div >
//           <Image className={styles.imageHome} src="/profile_home_pic.png" alt="home pic" width="600" height="600"/>
//         </div>
//       </main>
//     </>