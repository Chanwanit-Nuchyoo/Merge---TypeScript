export const merge = (collection_1: Array<number>, collection_2: Array<number>): Array<number> => {
  let new_collection:Array<number> = [];
  let i = 0;
  let j = 0;
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      new_collection.push(collection_1[i]);
      i++;
    } else {
      new_collection.push(collection_2[j]);
      j++;
    }
  }

  while (i < collection_1.length) {
    new_collection.push(collection_1[i]);
    i++;
  }

  while (j < collection_2.length) {
    new_collection.push(collection_2[j]);
    j++;
  }

  return new_collection;
};

let a:Array<number> = [0,2,4,6,8,10];
let b:Array<number> = [1,3,5,7,9,11];

console.log(merge(a,b));