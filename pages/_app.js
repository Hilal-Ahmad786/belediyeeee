import '../app/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbox from '../components/Chatbox';
import Appi from '../components/Appi';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Appi />

      
    </>
  );
}

export default MyApp;

