//   function arrayRotate(array, num) {
//     num = num % array.length;
//     return array.slice(num).concat(array.slice(0, num))
//   }

//   console.log(arrayRotate([1, 2, 3, 4, 5], 4));

// function NumberTwoSum(nums, num2) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let ix = i + 1; ix < nums.length; ix++) {
//       if (nums[i] + nums[ix] === num2) {
//         return [i, ix];
//       }
//     }
//   }
//   return [];
// }

// console.log(NumberTwoSum([2, 7, 11, 15], 22));

// function NumberSum(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     for (let ix = i + 1; ix < array.length; ix++) {
//       if (array[i] + array[ix] === num) return true;
//     }
//   }
//   return false;
// }

// console.log(NumberSum([5, 2], 7));

// function arrayDifference(array1, array2) {
//   let difference = array1
//     .filter((num) => !array2.includes(num))
//     .concat(array2.filter((num) => !array1.includes(num)));
//   return difference;
// }
// console.log(arrayDifference([5, 5, 4, 3], [2, 5, 4, 8]));

// function increaseOnlyNumbers(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char >= "0" && char <= "9") result += (parseInt(char) + 1).toString();
//     else result += char;
//   }
//   return result;
// }

// console.log(increaseOnlyNumbers("kai456"));

// function countedNumbers(arr) {
//   let natija = {};
//   arr.forEach((son) => {
//     if (natija[son]) {
//       natija[son]++;
//     } else {
//       natija[son] = 1;
//     }
//   });
//   return natija;
// }
// console.log(countedNumbers([1, 2, 2, 3, 4, 4, 4, 5, 1, 3, 5]));

// function allArraySum(arrays) {
//   let sum = 0;
//   arrays.forEach((row) => row.forEach((num) => (sum += num)));
//   return sum;
// }

// console.log(
//   allArraySum([
//     [1, 11, 7],
//     [55, 5, 65],
//     [12, 447, 97],
//   ])
// );
