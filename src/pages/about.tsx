import Head from 'next/head'
import styles from '../styles/About.module.scss'

export default function About(){
  return(
    <>
      <Head>
        <title>AboutMe | Nogalha</title>
      </Head>
      <div className={styles.contentContainer}>
        <h1>
        I'm a technician, graduated, in <span>Systems Development</span> from the Federal Institute 
        of Education, Science and Technology of Brasília. Now,
        i'm current student of <span>Computer Science</span> at University of Brasilia,
        i'm 21 years old and learning about clean code with <span>NodeJs</span>, <span>ReactJs</span> and
        <span> NextJs</span>. I have experience with <span>C/C++</span> languages and <span>Python</span>. 
        Everyday, i have been learning about something new. So, let's work together!
        </h1>
      </div>
    </>
  )
}