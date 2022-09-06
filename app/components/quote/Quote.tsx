import styles from './quote.module.css';

type Props = {
  quote: string;
};

function Quote({ quote }: Props) {
  return <p className={styles.quote}>{ quote }</p>;
}

export default Quote;
