const analytics = {
  init: () => {
    // eslint-disable-next-line
    console.table("i firedx");
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-164620923-1");
  },
};

export default analytics;
