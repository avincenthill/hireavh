const analytics = {
  init: (date) => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', date);
    gtag('config', 'UA-164620923-1');
  },
};

export default analytics;
