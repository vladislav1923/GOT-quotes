import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <span className={styles.copyright}>
        Powered by public&nbsp;
        <a
          className={styles.link}
          href="https://rapidapi.com/apiwhiz/api/game-of-thrones-quotes/"
          target="_blank"
          rel="noreferrer"
        >
          API
        </a>
      </span>
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
    </footer>
  );
}
