import Image from 'next/image';
import ToggleTheme, { Theme } from 'react-toggle-theme';
import { observer } from 'mobx-react-lite';
import styles from './footer.module.css';
import { State, useStore } from '../../store/store';
import API_SOURCE_URL from '../../constants/api-source-url';

type Props = {
  store?: State;
};

const Footer = observer(({ store }: Props) => {
  const { theme, update } = useStore(store);

  return (
    <footer className={styles.container}>
      <span className={styles.copyright}>
        Powered by public&nbsp;
        <a
          className={styles.link}
          href={API_SOURCE_URL}
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
