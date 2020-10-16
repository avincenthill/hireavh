import styles from 'styles/styleconfig';
const utils = {};

//set timeouts to run functions in time percievable to humans
utils.sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
/*
  return a new shuffled array
  @param {Array} an array containing the items
  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  */
utils.shuffleArray = (array) => {
  let j, x, i;
  let a = [...array];
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

utils.isDarkTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  return currentTheme === null || currentTheme !== 'light';
};

utils.toggleTheme = () => {
  let newTheme = 'dark';
  if (utils.isDarkTheme()) {
    newTheme = 'light';
  }
  localStorage.setItem('theme', newTheme);
  utils.renderTheme();
};

utils.renderTheme = () => {
  const isLight = !utils.isDarkTheme();
  let root = document.documentElement;
  styles.themeColors.forEach((color, key) => {
    root.style.setProperty(key, isLight ? color.light : color.dark);
  });
};

utils.getColor = (name) => {
  return utils.isDarkTheme()
    ? styles.themeColors.get(name).dark
    : styles.themeColors.get(name).light;
};

utils.getDarkColor = (name) => {
  return styles.themeColors.get(name).dark;
};

utils.getIconStyles = (name) => {
  if (utils.isDarkTheme()) {
    return styles.icons[name] ? styles.icons[name] : {};
  } else {
    return styles.icons.light[name] ? styles.icons.light[name] : {};
  }
};

export default utils;
