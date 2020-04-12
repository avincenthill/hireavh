const utils = {
  //sets timeouts to run functions in time percievable to humans
  sleep: (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  },
  /*
  shuffles array in place.
  @param {Array} an array containing the items
  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  */
  shuffleArray: (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  },
};

export default utils;
