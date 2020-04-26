const quicksort = {
  id: 4,
  title: "Quick Sort",
  emoji: "🐇",
  description:
    "select a 'pivot' element from the array and partition the other elements into two sub-arrays, according to whether they are less than or greater than the pivot, then sort the sub-arrays recursively",
  fn: (array, snapShotFn) => {
    snapShotFn(array);
    const partition = (arr, left, right) => {
      let pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
      while (i <= j) {
        while (arr[i] < pivot) {
          i++;
        }
        while (arr[j] > pivot) {
          j--;
        }
        if (i <= j) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }
      return i;
    };

    const quickSort = (arr, left, right) => {
      let index;
      if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
          snapShotFn(arr, [left], [index - 1]);
          quickSort(arr, left, index - 1);
        }
        if (index < right) {
          snapShotFn(arr, [index], [right]);
          quickSort(arr, index, right);
        }
      }
      return array;
    };

    const sortedArray = quickSort(array, 0, array.length - 1);
    snapShotFn(sortedArray);
    return sortedArray;
  },
  fnDisplayString: `
    const partition = (arr, left, right) => {
      let pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
      while (i <= j) {
        while (arr[i] < pivot) {
          i++;
        }
        while (arr[j] > pivot) {
          j--;
        }
        if (i <= j) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }
      return i;
    }

    const quickSort = (arr, left, right) => {
      let index;
      if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
          quickSort(arr, left, index - 1);
        }
        if (index < right) {
          quickSort(arr, index, right);
        }
      }
      return arr;
    }

    const sortedArray = quicksort(unsortedArray,0,unsortedArray.length-1);
    `,
  complexity: {
    time: {
      best: "Ω(n*log(n))",
      avg: "Θ(n*log(n))",
      worst: "O(n^2)",
    },
    space: {
      worst: "O(log(n))",
    },
  },
};

export default quicksort;
