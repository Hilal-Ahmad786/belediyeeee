import '../app/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
     
        <Navbar />
        <Component {...pageProps} />
     

      
    </>
  );
}

export default MyApp;

