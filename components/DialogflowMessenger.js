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
        oauth-client-id="INSERT_OAUTH_CLIENT_ID"
        location="europe-west3"
        project-id="osmangazi-belediyesi"
        agent-id="830e9443-fbea-49a8-a7e1-98433b6f5045"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Agent"></df-messenger-chat-bubble>
      </df-messenger>
      <style jsx global>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          bottom: 16px;
          right: 5px;
          max-height: 50 vh; /* Max height 80% of viewport height */
          width: 100%;
          max-width: 400px;
        }
        @media (max-width: 768px) {
          df-messenger {
            right: 8px; /* Adjust right position for smaller screens */
            bottom: 8px; /* Adjust bottom position for smaller screens */
            max-width: 90%; /* Adjust max-width for smaller screens */
          }
        }
      `}</style>
    </>
  );
};

export default DialogflowMessenger;
