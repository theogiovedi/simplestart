import Header from '@/components/Header.js'
import Main from '@/components/Main.js'
import Footer from '@/components/Footer.js'
import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('');
  const [background, setBackground] = useState('');
  const [image, setImage] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    window.localStorage.setItem('background', '#2B3E1D');
    window.localStorage.setItem('image', 'https://wallpapercave.com/uwp/uwp2147701.jpeg');
    window.localStorage.setItem('color', '#e6e6e6');
    setBackground(window.localStorage.getItem('background'));
    setImage(window.localStorage.getItem('image'));
    setColor(window.localStorage.getItem('color'));
  });

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className={styles.home} style={{ backgroundColor: background, color: color }}>
      <Header />
      <Main input={input} handleInput={handleInput} image={image} background={background} />
      <Footer />
    </div>
  )
}
