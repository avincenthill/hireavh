import utils from "utils/utils";

const sorts = {
  title: "Sorting Algorithms",
  emoji: "📊",
  numBars: 25,
  complexityHeader: "🧮 complexity",
  timeHeader: "🕒 time",
  spaceHeader: "🌌 space",
  data: [
    // *************************************************************************
    {
      id: 1,
      title: "Bubble Sort",
      emoji: "💭",
      fn: (array, snapShotFn) => {
        const swap = (array, i, j) => {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        };
        for (let i = 0; i < array.length; i++) {
          for (let j = 1; j < array.length; j++) {
            if (array[j - 1] > array[j]) {
              swap(array, j - 1, j);
              snapShotFn(array, [i], [j], [j - 1]);
            } else {
              snapShotFn(array, [i], [j], null);
            }
          }
        }
      },
      fnDisplayString: `
        const bubbleSort = (array) => {
          const swap = (array, i, j) => {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }

          for (let i = 0; i < array.length; i++) {
            for (let j = 1; j < array.length; j++) {
              if (array[j - 1] > array[j]) {
                swap(array, j - 1, j);
              }
            }
          }

          return array;
        }`,
      complexity: {
        time: {
          best: "Ω(n)",
          avg: "Θ(n^2)",
          worst: "O(n^2)",
        },
        space: {
          worst: "O(1)",
        },
      },
    },
    // *************************************************************************
    {
      id: 2,
      title: "Insertion Sort",
      emoji: "⬇️",
      fn: (array, snapShotFn) => {
        let i, j, key;
        for (i = 1; i < array.length; i += 1) {
          key = array[i];
          j = i - 1;
          while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j -= 1;
            snapShotFn(array, [i], [j], [j + 1]);
          }
          array[j + 1] = key;
          snapShotFn(array, [i], [j]);
        }
      },
      fnDisplayString: `
        const insertionSort = (array) => {
          let i, j, key;
          for (i = 1; i < array.length; i += 1) {
            key = array[i];
            j = i - 1;
            while (j >= 0 && array[j] > key) {
              array[j + 1] = array[j];
              j -= 1;
            }
            array[j + 1] = key;
          }
        }`,
      complexity: {
        time: {
          best: "Ω(n)",
          avg: "Θ(n^2)",
          worst: "O(n^2)",
        },
        space: {
          worst: "O(1)",
        },
      },
    },
    // *************************************************************************
    {
      id: 3,
      title: "Bogo Sort",
      emoji: "🤪",
      fn: (array, snapShotFn) => {
        const isSorted = (arr) => {
          for (let i = 0; i < array.length; i += 1) {
            snapShotFn(arr, [i], null, null);
            if (i > 0 && arr[i - 1] > arr[i]) {
              return false;
            }
          }
          return true;
        };
        let counter = 0;
        let newArray = [...array];
        while (!isSorted(newArray) && counter < 100) {
          newArray = utils.shuffleArray(newArray);
          counter += 1;
        }
      },
      fnDisplayString: `
        const bogoSort = (array) => {
          const isSorted = (arr) => {
            for (let i = 0; i < array.length; i += 1) {
              if (i > 0 && arr[i - 1] > arr[i]) {
                return false;
              }
            }
            return true;
          };
          
          while (!isSorted(array)) {
            array = utils.shuffleArray(array);
          }
        }`,
      complexity: {
        time: {
          best: "Ω(n)",
          avg: "Θ((n+1)!)",
          worst: "O(∞)",
        },
        space: {
          worst: "O(1)",
        },
      },
    },
    // *************************************************************************
  ],
};

export default sorts;
