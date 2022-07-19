import styles from './header.module.css';
import BackgroundColorsEnum from '../../enums/background-colors.enum';

type Props = {
  bgColor: BackgroundColorsEnum;
};

export default function Header({ bgColor }: Props) {
  const fontColorClassName = bgColor === BackgroundColorsEnum.Black
    ? styles.whiteFontColor : styles.blackFontColor;

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
