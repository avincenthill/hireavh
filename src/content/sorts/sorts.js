import bubblesort from "./algos/bubblesort";
import insertionsort from "./algos/insertionsort";
import quicksort from "./algos/quicksort";
import bogosort from "./algos/bogosort";

// data from https://www.bigocheatsheet.com/
const sorts = {
  title: "Sorting Algorithms",
  emoji: "📊",
  numBars: 100,
  complexityHeader: "🧮 complexity",
  timeHeader: "🕒 time",
  spaceHeader: "🌌 space",
  data: [bubblesort, insertionsort, quicksort, bogosort],
};

export default sorts;
