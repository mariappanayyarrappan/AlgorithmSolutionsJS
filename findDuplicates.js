// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice. You must write an algorithm that runs in O(n) time and uses only constant extra space.
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]


function findDuplicates(nums) {
    const duplicates = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.abs(nums[i]);
    }
    
    return duplicates;
}

// Example usage:
const nums3 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums3)); // Output: [2, 3]
