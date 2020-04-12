const sorts = {
  title: "Sorting Algorithms",
  emoji: "📊",
  numBars: 50,
  complexityHeader: "🧮 complexity",
  timeHeader: "🕒 time",
  spaceHeader: "🌌 space",
  data: [
    // *************************************************************************
    {
      id: 1,
      title: "Bubble Sort",
      emoji: "💭",
      fn: async (array, renderFn) => {
        function swap(array, i, j) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        for (let i = 0; i < array.length; i++) {
          for (let j = 1; j < array.length; j++) {
            let hasSwapped = false;
            if (array[j - 1] > array[j]) {
              swap(array, j - 1, j);
              hasSwapped = true;
            }
            if (hasSwapped) {
              await renderFn(array);
            } else {
              await renderFn(array);
            }
          }
        }
        await renderFn(array);
      },
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
      fn: async (array, renderFn) => {
        let i = 0,
          j;
        for (i + 1; i < array.length; i++) {
          var temp = array[i];
          for (j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
          }
          array[j + 1] = temp;
          await renderFn(array);
        }
        await renderFn(array);
      },
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
  ],
};

export default sorts;
