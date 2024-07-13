import '../styles/globals.css';
import ChatBot from '../components/ChatBot';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatBot />
    </>
  );
}

export default MyApp;
