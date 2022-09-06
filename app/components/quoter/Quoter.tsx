import Image from 'next/image';
import styles from './quoter.module.css';
import Character from '../../interfaces/character';

type Props = {
  character?: Character;
};

function Quoter({ character }: Props) {
  const image = character?.image || '';

  return (
    <div className={styles.quoter}>
      <Image src={image} height={160} width={100} />
      <div className={styles.quoterInfo}>
        <h1 className={styles.quoterName}>{ character?.name }</h1>
      </div>
    </div>
  );
}

export default Quoter;
