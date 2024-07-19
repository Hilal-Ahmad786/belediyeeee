import '../app/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import TawkTo from '../components/TawkTo';


function MyApp({ Component, pageProps }) {
  return (
    <>
     
        <Navbar />
        <Component {...pageProps} />
        <TawkTo />

      
    </>
  );
}

export default MyApp;

