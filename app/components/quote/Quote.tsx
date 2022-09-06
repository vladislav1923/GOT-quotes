import styles from './quote.module.scss';

type Props = {
  quote: string;
};

function Quote({ quote }: Props) {
  return (
    <p className={styles.quote}>
      <span className={styles.mark}>&#8223;</span>
      { quote }
    </p>
  );
}

export default Quote;
