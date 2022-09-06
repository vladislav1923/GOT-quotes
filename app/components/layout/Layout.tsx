import Head from 'next/head';
import React from 'react';
import { Theme } from 'react-toggle-theme';
import { observer } from 'mobx-react-lite';
import styles from './layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { State, useStore } from '../../store/store';

type Props = {
  store?: State;
  children: React.ReactNode;
};

const Layout = observer(({ store, children }: Props) => {
  const { theme } = useStore(store);
  const themeClassName = theme === Theme.LIGHT ? styles.lightTheme : styles.darkTheme;
  return (
    <>
      <Head>
        <title>Game of Thrones Quotes</title>
        <meta name="description" content="Game of Thrones Quotes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favs/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favs/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favs/favicon-16x16.png" />
        <link rel="manifest" href="/favs/site.webmanifest" />
      </Head>
      <div className={`${styles.container} ${themeClassName}`}>
        <Header />
        <main className={styles.main}>{ children }</main>
        <Footer store={store} />
      </div>
    </>

  );
});

export default Layout;
