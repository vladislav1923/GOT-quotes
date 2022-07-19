import styles from './home.module.css';
import Button from '../button/Button';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Impedit iste magnam nemo non numquam. Assumenda commodi distinctio
          doloribus ducimus mollitia nostrum officia porro veritatis. Eos
          illo natus nulla placeat quis?
        </p>
        <div className={styles.fork}>
          <Button
            size={ButtonSizesEnum.Medium}
            color={ButtonColorsEnum.Fire}
            onClick={() => console.log('hi')}
          >
            Go to Character Selection
          </Button>
          {/*  button */}
        </div>
      </div>
    </div>
  );
}
