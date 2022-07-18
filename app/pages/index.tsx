import Layout from '../components/layout/Layout';
import { BackgroundColorsEnum } from '../enums/background-colors.enum';

function Home() {
  const bgColor = BackgroundColorsEnum.White;

  return (
    <Layout bgColor={bgColor}>
      Hello world
    </Layout>
  );
}

export default Home;
