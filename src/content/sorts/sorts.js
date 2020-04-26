import bubblesort from "./algos/bubblesort";
import insertionsort from "./algos/insertionsort";
import quicksort from "./algos/quicksort";
import bogosort from "./algos/bogosort";

// data from https://www.bigocheatsheet.com/
const sorts = {
  title: "Sorting Algorithms",
  description: `You can see common sorting algorithms rendered with HTML canvas here. This is a personal project that I'm continuing to expand on as I study more sorting algorithms. It's open source, just like this website!`,
  emoji: "📊",
  numBars: 100,
  complexityHeader: "🧮 complexity",
  timeHeader: "🕒 time",
  spaceHeader: "🌌 space",
  data: [bubblesort, insertionsort, quicksort, bogosort],
};

export default sorts;
