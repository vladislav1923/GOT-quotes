import styles from './layout.module.css';
import Head from "next/head";
import React from "react";
import Header from "../header/Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
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
            <div className={styles.container}>
                <Header />
                <main>{ children }</main>
            {/*    footer */}
            </div>
        </>

    )
}
