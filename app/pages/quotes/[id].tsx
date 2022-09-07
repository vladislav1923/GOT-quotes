import { NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import { getQuotesByQuoter } from '../../services/quotes/quotes.service';
import Quote from '../../interfaces/quote';
import QuotesList from '../../components/quotes-list/QuotesList';
import Error from '../../components/error/Error';
import Character from '../../interfaces/character';
import CHARACTERS from '../../constants/characters';
import Anchor from '../../components/anchor/Anchor';

type Props = {
  character?: Character;
  quotes: Quote[];
  error?: string;
};

function QuotesPage({ character, quotes, error }: Props) {
  const router = useRouter();
  const backToCharacters = () => {
    router.push('../characters');
  };

  return (
    <Layout>
      <Anchor text="Back to characters" click={backToCharacters} />
      { error ? <Error text={error} /> : <QuotesList character={character} quotes={quotes} /> }
    </Layout>
  );
}

export async function getServerSideProps(context: NextApiRequest) {
  const { id } = context.query;

  if (typeof id !== 'string') {
    return {
      props: { quotes: [], error: 'Bad Param' },
    };
  }

  try {
    const quotes = await getQuotesByQuoter(id);
    const character = CHARACTERS.find((item: Character) => item.id === id);
    return {
      props: { character, quotes },
    };
  } catch {
    return {
      props: { quotes: [], error: 'Something went wrong, please try again later' },
    };
  }
}

export default QuotesPage;
