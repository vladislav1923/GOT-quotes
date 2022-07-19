import Image from 'next/image';
import ToggleTheme, { Theme } from 'react-toggle-theme';
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
      <div className={styles.buttons}>
        <ToggleTheme selectedTheme={Theme.LIGHT} onChange={() => console.log('hi')} />
        <a
          href="https://github.com/vladislav1923/gqt"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </a>
      </div>
    </footer>
  );
}
