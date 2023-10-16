// function arrayIntersection(arr1, arr2) {
//   const combined = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !combined.includes(arr1[i])) {
//       combined.push(arr1[i]);
//     }
//   }
//   return combined;
// }

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const combined = [];
  for (let num of arr2) {
    if (set1.has(num)) {
      combined.push(num);
    }
  }
  return combined;
}

module.exports = arrayIntersection;
