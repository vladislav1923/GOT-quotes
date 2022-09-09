import Head from 'next/head';
import React from 'react';
import { Theme } from 'react-toggle-theme';
import { useAppSelector } from '../../store/hooks';
import styles from './layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Feedback from '../feedback/Feedback';
import Notification from '../notification/Notification';
import { State } from '../../interfaces/state';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const theme = useAppSelector((state: State) => state.theme);
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
        <Footer />
        <Feedback />
        <Notification />
        <div id="app-modal" />
      </div>
    </>

  );
}

export default Layout;
