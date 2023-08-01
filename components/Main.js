import styles from '@/styles/Main.module.scss'

export default function Main({ input, handleInput, image, background }) {
  return (
    <main className={styles.main} style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}>
      <div className={styles.box} style={{ backgroundColor: background}}>
        <div className={styles.left}>
          <button className={styles.search}><i className="bi bi-search"></i></button>
        </div>
        <div className={styles.right}>
          <textarea type='text' className={styles.input} placeholder='Search' rows="1" onInput={handleInput}/>
          <span className={styles.characters}>{input.length}</span>
        </div>
      </div>
    </main>
  );
}
