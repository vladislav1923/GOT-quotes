import Link from 'next/link';
import styles from './home.module.scss';
import Button from '../button/Button';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <p className={styles.desc}>
          This website provides to you an ability to get access to the storage
          of fairy collection of quotes from the greatest TV series named Game of Thrones.
          Enjoy it just to click a button below
        </p>
        <div className={styles.fork}>
          <Link href="/characters">
            <Button
              size={ButtonSizesEnum.Medium}
              color={ButtonColorsEnum.Fire}
            >
              Go to Character Selection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
