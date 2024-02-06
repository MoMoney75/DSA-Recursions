/** product: calculate the product of an array of numbers. */

function product(nums,idx=0) {
if (idx === nums.length) return 1;

let total = nums[idx] * product(nums, idx+1)
return total;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words,idx=0,longestWord=0) {
if(idx === words.length) return longestWord;
longestWord = Math.max(words[idx].length, longestWord);
return longest(words,idx+1, longestWord);

// if(words.length === 0) return 0;
// let longestWord = ''

// for(let word of words){
//   if(word.length >= longestWord.length){
//     longestWord = word;
//   }  
// }
// return longestWord.length;

}

/** everyOther: return a string with every other letter. */

function everyOther(str,idx=0, newStr="") {
if(idx >= str.length) return newStr;
newStr += str[idx];
return everyOther(str, idx+2, newStr);


// let string;
// let arr = [];
// for(let i = 0; i <= str.length; i++){
//   if(i % 2 === 0){
//     arr.push(str[i])
//     string = arr.join('')
//     }}
//   return string;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
let leftIdx = idx;
let rightIdx = str.length - idx - 1;
if (leftIdx >= rightIdx) return true;
if (str[leftIdx] !== str[rightIdx]) return false;

return isPalindrome(str,idx+1)

// let string = str.split('');
// let reverseStr = [];
// for(let i = string.length; i >= 0; i--){
// reverseStr.push(str[i])
// }
// if (string.join('') === reverseStr.join('')){
// return true;
// }
// else { 
// return false;
// }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
if(idx >= arr.length) return -1;
if(arr[idx] === val) return idx;


return findIndex(arr,val,idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length, newStr="") {
  if (idx < 1) return newStr;
  newStr += str[idx-1];
  return revString(str,idx-1,newStr);
  
// let string = str.split('')
// let reverseStr = []
// for (let i = string.length; i >= 0; i--){
//     reverseStr.push(string[i])
    
// }
// return reverseStr.join('')
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let arr = []
for(let key in obj){
if(typeof obj[key] === "string") arr.push(obj[key]);
if(typeof obj[key] === "object") 
arr.push(...gatherStrings(obj[key]))
}
return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx=0, rightIdx=arr.length-1) {
let middleIdx = Math.floor((leftIdx+rightIdx)/2)

if(leftIdx > rightIdx) return -1;
if(arr[middleIdx] === val) return middleIdx; 

if(val > middleIdx){
  leftIdx = middleIdx+1;
}

else{
  rightIdx = middleIdx-1;
}

return binarySearch(arr,val,leftIdx,rightIdx)
// l     m     r
//[1,2,3,4,5,6,7]  
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
