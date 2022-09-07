import Image from 'next/image';
import ToggleTheme, { Theme } from 'react-toggle-theme';
import { observer } from 'mobx-react-lite';
import styles from './footer.module.scss';
import { State, useStore } from '../../store/store';
import API_SOURCE_URL from '../../constants/api-source-url';
import Anchor from '../anchor/Anchor';

type Props = {
  store?: State;
};

const Footer = observer(({ store }: Props) => {
  const { theme, updateTheme, updateFeedback } = useStore(store);

  return (
    <footer className={styles.container}>
      <span className={styles.copyright}>
        Powered by public&nbsp;
        <Anchor text="API" url={API_SOURCE_URL} />
      </span>
      <div className={styles.buttons}>
        <div className={styles.feedbackLinkButton}>
          <Anchor text="Send Feedback" click={() => updateFeedback(true)} />
        </div>
        <button type="button" aria-label="feedback-button" className={styles.feedbackIconButton} onClick={() => updateFeedback(true)} />
        <ToggleTheme
          selectedTheme={theme as Theme}
          onChange={(e: Theme) => updateTheme(e)}
        />
        <a
          href="https://github.com/vladislav1923/gqt"
          target="_blank"
          rel="noreferrer"
          className={styles.logoLink}
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
