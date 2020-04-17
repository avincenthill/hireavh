import utils from "utils/utils";

const bogosort = {
  id: 4,
  title: "Bogo Sort",
  emoji: "🤪",
  fn: (array, snapShotFn) => {
    const isSorted = (arr) => {
      for (let i = 0; i < array.length; i += 1) {
        snapShotFn(arr, [i]);
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

      return array;
    }

    const sortedArray = bogosort(unsortedArray);
    `,
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
};

export default bogosort;
