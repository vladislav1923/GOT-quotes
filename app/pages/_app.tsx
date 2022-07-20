import '../styles/vars.css';
import '../styles/fonts.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import { useStore } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
