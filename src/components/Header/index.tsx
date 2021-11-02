import styles from './styles.module.scss'

import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header(){
  const router = useRouter();

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </a>
          <a className={router.pathname == "/about" ? styles.active : ""}>
            <Link href="/about">About me</Link>
          </a>
          <a className={router.pathname == "/projects" ? styles.active : ""}>
            <Link href="/projects">Projects</Link>
          </a>
          <a className={router.pathname == "/contact" ? styles.active : ""}>
            <Link href="/contact">Contact</Link>
          </a>
        </nav>
      </div>
    </header>
  );
}