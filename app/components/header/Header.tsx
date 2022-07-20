import { Theme } from 'react-toggle-theme';
import styles from './header.module.css';

type Props = {
  theme: Theme;
};

export default function Header({ theme }: Props) {
  const fontColorClassName = theme === Theme.LIGHT
    ? styles.blackFontColor : styles.whiteFontColor;

  return (
    <header className={styles.container}>
      <span className={`${styles.title} ${fontColorClassName}`}>
        Game Of Thrones Quotes
      </span>
      <p className={`${styles.desc} ${fontColorClassName}`}>
        Fiery collection of quotes from Game of Thrones
      </p>
    </header>
  );
}
