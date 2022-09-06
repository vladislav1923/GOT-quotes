import Layout from '../components/layout/Layout';
import Error from '../components/error/Error';

function NotFoundPage() {
  return (
    <Layout>
      <Error text="This page could not be found" />
    </Layout>
  );
}

export default NotFoundPage;
