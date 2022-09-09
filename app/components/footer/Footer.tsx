import Image from 'next/image';
import ToggleTheme, { Theme } from 'react-toggle-theme';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './footer.module.scss';
import API_SOURCE_URL from '../../constants/api-source-url';
import Anchor from '../anchor/Anchor';
import { updateTheme, updateFeedback } from '../../store/store';
import { State } from '../../interfaces/state';

function Footer() {
  const theme = useAppSelector((state: State) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <footer className={styles.container}>
      <span className={styles.copyright}>
        Powered by public&nbsp;
        <Anchor text="API" url={API_SOURCE_URL} />
      </span>
      <div className={styles.buttons}>
        <div className={styles.feedbackLinkButton}>
          <Anchor
            text="Send Feedback"
            click={() => dispatch(updateFeedback(true))}
          />
        </div>
        <button
          type="button"
          aria-label="feedback-button"
          className={styles.feedbackIconButton}
          onClick={() => dispatch(updateFeedback(true))}
        />
        <ToggleTheme
          selectedTheme={theme as Theme}
          onChange={(e: Theme) => dispatch(updateTheme(e))}
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
}

export default Footer;
