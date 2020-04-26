const styles = {
  icons: {
    default: {
      color: "var(--c-1)",
      width: "3rem",
      height: "3rem",
    },
    link: {
      color: "var(--c-2)",
      width: "2rem",
      height: "2rem",
    },
    techHero: {
      color: "var(--c-1)",
      width: "4rem",
      height: "4rem",
      padding: ".75rem",
    },
    tech: {
      color: "var(--c-2)",
      width: "1.5rem",
      height: "1.5rem",
      padding: ".25rem",
    },
    contact: {
      color: "var(--c-1)",
      width: "1rem",
      height: "1rem",
      padding: ".5rem",
    },
    contactLight: {
      color: "var(--c-white)",
      width: "1rem",
      height: "1rem",
      padding: ".5rem",
    },
    sort: {
      color: "var(--c-1)",
      width: "1.5rem",
      height: "1.5rem",
      padding: ".5rem",
    },
    project: {
      color: "var(--c-1)",
      width: "2rem",
      height: "2rem",
      padding: "0rem",
    },
    projectDark: {
      color: "var(--c-black)",
      backgroundColor: "var(--c-white)",
      borderRadius: "100rem",
      width: "2rem",
      height: "2rem",
      padding: ".25rem",
    },
  },
  resume: {
    height: window.screen.height * 0.6,
  },
  sort: {
    delay: 25,
  },
};

styles.themeColors = new Map([
  [
    "--c-black",
    {
      dark: "#020a0d",
    },
  ],
  [
    "--c-white",
    {
      dark: "#f5fbfd",
    },
  ],
  [
    "--c-1",
    {
      dark: "#c8eaf7",
      light: "#143886",
    },
  ],
  [
    "--c-2",
    {
      dark: "#85d1ed",
      light: "#143886",
    },
  ],
  [
    "--c-3",
    {
      dark: "#f7edc8",
      light: "#143886",
    },
  ],
  [
    "--c-4",
    {
      dark: "#147186",
      light: "#143886",
    },
  ],
  [
    "--c-5",
    {
      dark: "#b67e72",
      light: "#143886",
    },
  ],
]);

const invertColor = (hex) => {
  // from https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
  }
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
};

styles.themeColors.forEach((color, key) => {
  // set light theme colors by inverting dark colors
  let value = styles.themeColors.get(key);
  value.light = value.light ? value.light : invertColor(color.dark);
  styles.themeColors.set("light", value);
});

export default styles;
