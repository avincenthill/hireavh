const bubblesort = {
  id: 1,
  title: 'Bubble Sort',
  emoji: '💭',
  description:
    'repeatedly step through the list, compare adjacent elements and swap them if they are in the wrong order',
  fn: (array, snapShotFn) => {
    snapShotFn(array);
    const swap = (array, i, j) => {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[j - 1] > array[j]) {
          swap(array, j - 1, j);
          snapShotFn(array, [i], [j]);
        } else {
          snapShotFn(array, [i], [j]);
        }
      }
    }
    snapShotFn(array);
    return array;
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
    }

    const sortedArray = bubblesort(unsortedArray);
    `,
  complexity: {
    time: {
      best: 'Ω(n)',
      avg: 'Θ(n^2)',
      worst: 'O(n^2)',
    },
    space: {
      worst: 'O(1)',
    },
  },
};

export default bubblesort;
