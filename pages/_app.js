import '../app/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbox from '../components/Chatbox';

import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBot from '../components/ChatBot';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Chatbox />

      
    </>
  );
}

export default MyApp;

