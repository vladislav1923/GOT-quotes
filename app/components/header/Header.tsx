import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <span className={styles.title}>
        Game Of Thrones Quotes
      </span>
      <p className={styles.desc}>
        Fiery collection of quotes from Game of Thrones
      </p>
    </header>
  );
}
