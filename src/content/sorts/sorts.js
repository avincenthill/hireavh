import bogosort from './algos/bogosort';
import bubblesort from './algos/bubblesort';
import insertionsort from './algos/insertionsort';
import quicksort from './algos/quicksort';

// data from https://www.bigocheatsheet.com/
const sorts = {
  title: 'Sorting Algorithms',
  description: `PERSONAL PROJECT: Common sorting algorithms rendered with HTML canvas.  This project continues to expand as I study sorting algorithms more.  It is open source, just like this website!`,
  emoji: '📊',
  numBars: 100,
  complexityHeader: '🧮 complexity',
  timeHeader: '🕒 time',
  spaceHeader: '🌌 space',
  data: [bubblesort, insertionsort, quicksort, bogosort],
};

export default sorts;
