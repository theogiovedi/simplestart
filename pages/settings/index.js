import Header from '@/components/Header.js'
import styles from '@/styles/Settings.module.scss'
import { useEffect, useState } from 'react'

export default function Settings() {
  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');
  const [bookmarks, setBookmarks] = useState('');

  useEffect(() => {
    window.localStorage.setItem('background', '#2B3E1D');
    window.localStorage.setItem('color', '#e6e6e6');
    let foo = [{ name: "The Verge", url: "https://theverge.com" }, { name: "Email", url: "https://gmail.com" }, { name: "Awwwards", url: "https://awwwards.com" }, { name: "UOL", url: "https://uol.com.br" }, { name: "Qual a Cor?", url: "https://theogiovedi.github.io/qual-a-cor" }];
    window.localStorage.setItem('bookmarks', JSON.stringify(foo));
    setBackground(window.localStorage.getItem('background'));
    setColor(window.localStorage.getItem('color'));
    setBookmarks(window.localStorage.getItem('bookmarks'));
  });

  return (
    <div className={styles.settings} style={{ backgroundColor: background, color: color }}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Settings</h1>
        <label className={styles.label}>
          Background Image
          <div className={styles.feature}>
            <input type="file" className={styles.input}/>
          </div>
        </label>
        <label className={styles.label}>
          Bookmarks
          <form className={styles.feature}>
            <input type="text" className={styles.input}/>
            <input type="text" className={styles.input}/>
            <button className={styles.button}><i className="bi bi-plus-lg"></i></button>
          </form>
          <ul>
            {
              JSON.parse(bookmarks).map(item => <li><a href={item.url}>{item.name}</a></li>)
            }
          </ul>
        </label>
      </main>
    </div>
  )
}
