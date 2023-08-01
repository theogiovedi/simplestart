import Header from '@/components/Header.js'
import styles from '@/styles/Settings.module.scss'
import { useEffect, useState } from 'react'

export default function Settings() {
  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    window.localStorage.setItem('background', '#2B3E1D');
    window.localStorage.setItem('image', 'https://wallpapercave.com/uwp/uwp2147701.jpeg');
    window.localStorage.setItem('color', '#e6e6e6');
    setBackground(window.localStorage.getItem('background'));
    setColor(window.localStorage.getItem('color'));
  });

  return (
    <div className={styles.settings} style={{ backgroundColor: background, color: color }}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Settings</h1>
        <label className={styles.label}>
          Background Image
          <div className={styles.feature}>
            <input type="text" className={styles.input}/>
            <button className={styles.button}><i className="bi bi-plus-lg"></i></button>
          </div>
        </label>
        <label className={styles.label}>
          Bookmarks
          <div className={styles.feature}>
            <input type="text" className={styles.input}/>
            <button className={styles.button}><i className="bi bi-plus-lg"></i></button>
          </div>
          <ul>
            {localStorage.getItem}
          </ul>
        </label>
      </main>
    </div>
  )
}