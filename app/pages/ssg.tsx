import { getSnapshot } from 'mobx-state-tree';
import { Theme } from 'react-toggle-theme';
import { initializeStore, State } from '../store/store';
import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';

type Props = {
  initialState: State;
};

export default function Ssg({ initialState }: Props) {
  return (
    <Layout store={initialState}>
      <Home />
    </Layout>
  );
}

export function getStaticProps() {
  const store = initializeStore();

  store.update(Theme.LIGHT);

  return { props: { initialState: getSnapshot(store) } };
}
