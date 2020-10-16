const insertionsort = {
  id: 2,
  title: 'Insertion Sort',
  emoji: '⬇️',
  description:
    'each iteration, remove one element from the input data, find the location it belongs within the sorted list, and insert it there',
  fn: (array, snapShotFn) => {
    snapShotFn(array);

    let i, j, key;
    for (i = 1; i < array.length; i += 1) {
      key = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j -= 1;
        snapShotFn(array, [i], [j]);
      }
      array[j + 1] = key;
      snapShotFn(array, [i], [j]);
    }
    snapShotFn(array);
    return array;
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

      return array;
    }
    
    const sortedArray = insertionSort(unsortedArray);
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
export default insertionsort;
