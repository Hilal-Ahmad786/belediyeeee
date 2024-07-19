// components/TawkTo.js

import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/669aa5b332dca6db2cb23b1c/1i361ehlb'; // Use your provided Tawk.to URL
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null; // This component does not render anything visible
};

export default TawkTo;
