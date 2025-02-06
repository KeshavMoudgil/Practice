// Given an array of integers nums and an integer target, return indices of the
// * two numbers such that they add up to target. You may assume that each input
// * would have exactly one solution, and you may not use the same element twice.
// * You can return the answer in any order.
// * <p>
// * Example 1: Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation:
// * Because nums[0] + nums[1] == 9, we return [0, 1].
// * <p>
// * Example 2: Input: nums = [3,2,4], target = 6 Output: [1,2]
// * <p>
// * Example 3: Input: nums = [3,3], target = 6 Output: [0,1]
// * <p>
// * <p>
// * Constraints: 2 <= nums.length <= 104 -109 <= nums[i] <= 109 -109 <= target <=
// * 109 Only one valid answer exists.
// */


// function twoSum(nums,target){
//   let map = {};
//   for(let i= 0; i<nums.length; i++){
//     const complement = target - nums[i];
//     if(map[complement] !== undefined){
//        return [map[complement],i];
//     }
//     map[nums[i]] = i
//   }
//   return []
// }

// //  Output: [0,1]

// console.log(twoSum(nums,target));




function twoSum(nums,target){
  let map = {};
  for(let i=0;i<nums.length;i++){
    const compliment = target - nums[i]
    if(map[compliment] !== undefined){
      return [map[compliment],i]
    }
    map[nums[i]] = i;
  }
  return [];
}

let nums = [2,7,11,15] 
let target = 9;
console.log(twoSum(nums,target));

function isPalidrome(str){
  const cleanedStr = str.toLowerCase('').replace(/[^a-z0-9]/g,'')
    return cleanedStr === cleanedStr.split('').reverse().join();
}
let str = 121;
console.log(isPalidrome(str));