import { merge } from "../src/merge";

describe("Test merge funtion", ()=>{
  test('[1] merges two sorted arrays 1', () => {
    const collection_1:Array<number> = [1, 2, 3, 4, 5];
    const collection_2:Array<number> = [6, 7, 8, 9, 10];
    expect(merge(collection_1, collection_2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('[2] merges two sorted arrays 2', () => {
    const collection_1:Array<number> = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]
    const collection_2:Array<number> = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
    expect(merge(collection_1, collection_2)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
  });
  test('[3] merges two arrays with duplicates', () => {
    const collection_1:Array<number> = [1, 2, 2, 3];
    const collection_2:Array<number> = [2, 3, 4, 5];
    expect(merge(collection_1, collection_2)).toEqual([1, 2, 2, 2, 3, 3, 4, 5]);
  });
  test('[4] merges two empty arrays', () => {
    const collection_1:Array<number> = []
    const collection_2:Array<number> = []
    expect(merge(collection_1, collection_2)).toEqual([]);
  });
  test('[5] merges two arrays with one empty array', () => {
    const collection_1:Array<number> = [1, 2, 3]
    const collection_2:Array<number> = []
    expect(merge(collection_1, collection_2)).toEqual([1, 2, 3]);
  });
})