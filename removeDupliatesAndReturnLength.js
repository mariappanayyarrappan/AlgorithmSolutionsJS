// Given a sorted array, remove all duplicates and return the length of the modified array solution.
// Examples: nums = {1, 1, 2, 2, 2, 3, 4, 4}; Output: 4
function removeDuplicates(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    let len = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[len] = nums[i];
            len++;
        }
    }
    return len;
}

// Example usage
let nums = [1, 1, 2, 2, 2, 3, 4, 4];
console.log(removeDuplicates(nums)); // Output: 4
console.log(nums.slice(0, 4)); // Output: [1, 2, 3, 4]
