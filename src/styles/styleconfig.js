const getColorHash = (cssVar) => {
  const hash = getComputedStyle(document.documentElement).getPropertyValue(
    cssVar
  );
  return hash;
};

const styles = {
  color: {
    cblack: getColorHash("--c-black"),
    cwhite: getColorHash("--c-white"),
    c1: getColorHash("--c-1"),
    c2: getColorHash("--c-2"),
    c3: getColorHash("--c-3"),
    c4: getColorHash("--c-4"),
    c5: getColorHash("--c-5"),
  },
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
    tech: {
      color: "var(--c-2)",
      width: "2.5rem",
      height: "2.5rem",
      padding: ".5rem",
    },
    contact: {
      color: "var(--c-1)",
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
  },
  resume: {
    height: window.screen.height * 0.6,
  },
  sort: {
    delay: 50,
  },
};

export default styles;
