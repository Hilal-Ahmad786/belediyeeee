import { useEffect } from 'react';
import Head from 'next/head';

const DialogflowMessenger = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
        />
      </Head>
      <df-messenger
        oauth-client-id="498060657556"  // Replace with your actual OAuth client ID
        location="australia-southeast1"
        project-id="osmangazi-belediyesi"
        agent-id="9eca18a6-1006-4b9e-92f7-a3a25e9525d0"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Agent Jul 17, 2024, 3:08:33 PM"></df-messenger-chat-bubble>
      </df-messenger>
      <style jsx global>{`
        df-messenger {
          z-index: 99999999999;
          position: fixed;
          bottom: 16px;
          right: 16px;
          max-height: 50vh!important;
          width: 100%;
          max-width: 400px;
        }
        @media (max-width: 768px) {
          df-messenger {
            right: 8px; 
            bottom: 8px; 
            max-width: 90%; 
          }
        }
      `}</style>
    </>
  );
};

export default DialogflowMessenger;
