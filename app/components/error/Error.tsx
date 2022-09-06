import Image from 'next/image';
import styles from './error.module.css';

type Props = {
  text: string;
};

function Error({ text }: Props) {
  return (
    <div className={styles.errorBlock}>
      <Image src="/ned.png" width={300} height={300} />
      <p className={styles.errorText}>Error</p>
      <p className={styles.errorText}>{ text }</p>
    </div>
  );
}

export default Error;
