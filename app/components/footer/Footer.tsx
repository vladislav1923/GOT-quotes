import Image from 'next/image';
import ToggleTheme, { Theme } from 'react-toggle-theme';
import { observer } from 'mobx-react-lite';
import styles from './footer.module.css';
import { IStore, useStore } from '../../store/store';

type Props = {
  // eslint-disable-next-line react/require-default-props
  store?: IStore;
};

const Footer = observer(({ store }: Props) => {
  const { theme, update } = useStore(store);
  const fontColorClassName = theme === Theme.LIGHT ? styles.blackColor : styles.whiteColor;

  return (
    <footer className={styles.container}>
      <span className={`${styles.copyright} ${fontColorClassName}`}>
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
        <ToggleTheme
          selectedTheme={theme as Theme}
          onChange={(e: Theme) => update(e)}
        />
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
});

export default Footer;
