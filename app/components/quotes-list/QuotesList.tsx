import QuoteInterface from '../../interfaces/quote';
import Quote from '../quote/Quote';
import styles from './quotes-list.module.css';
import Quoter from '../quoter/Quoter';
import Character from '../../interfaces/character';

type Props = {
  character?: Character;
  quotes: QuoteInterface[];
};

function QuotesList({ character, quotes }: Props) {
  return (
    <div className={styles.quotesListBlock}>
      <Quoter character={character} />
      <ul className={styles.quotesList}>
        {quotes.map((quote: QuoteInterface) => (
          <li key={quote.sentence}>
            <Quote quote={quote.sentence} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuotesList;
