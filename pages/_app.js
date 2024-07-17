import '../app/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Layout>

      <Navbar />
      <Component {...pageProps} />
      </Layout>

      
    </>
  );
}

export default MyApp;

