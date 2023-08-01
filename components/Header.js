import Link from 'next/link'
import Credits from '@/components/Credits.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '@/styles/Header.module.scss'

export default function Header() {
  return ( 
    <header className={styles.header}>
      <Credits />
      <Link href="/" className={styles.home}>
        SimpleStart
      </Link>
      <div className={styles.icons}>
        <Link href="https://github.com/theogiovedi/simplestart"><i className="bi bi-github" /></Link>
        <Link href="/settings"><i className="bi bi-gear-fill" /></Link>
      </div>
    </header>
  );
}
