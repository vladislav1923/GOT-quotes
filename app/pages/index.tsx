import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';
import BackgroundColorsEnum from '../enums/background-colors.enum';

function Index() {
  const bgColor = BackgroundColorsEnum.White;

  return (
    <Layout bgColor={bgColor}>
      <Home />
    </Layout>
  );
}

export default Index;
