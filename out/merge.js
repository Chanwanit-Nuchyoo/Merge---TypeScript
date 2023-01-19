"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
const merge = (collection_1, collection_2) => {
    let new_collection = [];
    let i = 0;
    let j = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            new_collection.push(collection_1[i]);
            i++;
        }
        else {
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
exports.merge = merge;
let a = [0, 2, 4, 6, 8, 10];
let b = [1, 3, 5, 7, 9, 11];
console.log((0, exports.merge)(a, b));
