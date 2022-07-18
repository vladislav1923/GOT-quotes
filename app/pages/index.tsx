import type { NextPage } from 'next'
import Layout from "../components/layout/Layout";
import {BackgroundColorsEnum} from "../enums/background-colors.enum";

const Home: NextPage = () => {
    const bgColor = BackgroundColorsEnum.White;

  return (
      <Layout bgColor={bgColor}>
        Hello world
      </Layout>
  )
}

export default Home
