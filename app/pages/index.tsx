import type { NextPage } from 'next'
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
      <Layout>
        Hello world
      </Layout>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Game of Thrones Quotes</title>
    //     <meta name="description" content="Game of Thrones Quotes" />
    //     <link rel="apple-touch-icon" sizes="180x180" href="/favs/apple-touch-icon.png" />
    //     <link rel="icon" type="image/png" sizes="32x32" href="/favs/favicon-32x32.png" />
    //     <link rel="icon" type="image/png" sizes="16x16" href="/favs/favicon-16x16.png" />
    //     <link rel="manifest" href="/favs/site.webmanifest" />
    //   </Head>
    //
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Not Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //
    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.tsx</code>
    //     </p>
    //
    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>
    //
    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>
    //
    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>
    //
    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    //
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}

export default Home
