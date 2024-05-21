// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicates(nums) {
    let i = 0;
    for (const n of nums) {
        if (i === 0 || n > nums[i - 1]) {
            nums[i++] = n;
        }
    }
    return i;
}

// Example usage:
const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums1);
console.log(k, nums1.slice(0, k)); // Output: 5, [0, 1, 2, 3, 4]
