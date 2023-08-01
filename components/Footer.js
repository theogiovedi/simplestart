import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="https://theverge.com">The Verge Overflow</Link>
        </li>
        <li>
          <Link href="https://gmail.com">Email</Link>
        </li>
        <li>
          <Link href="https://twitter.com">Twitter</Link>
        </li>
        <li>
          <Link href="https://threads.net">Threads</Link>
        </li>
        <li>
          <Link href="https://youtube.com">YouTube</Link>
        </li>
        <li>
          <Link href="https://awwwards.com">Awwwards</Link>
        </li>
        <li>
          <Link href="https://dribbble.com">Dribbble</Link>
        </li>
      </ul>
    </footer>
  );
}

