// Given a sorted binary array, efficiently count the total number of 1’s in it.
// Input:  nums[] = [0, 0, 0, 0, 1, 1, 1]
// Output: The total number of 1’s present is 3


function count(nums, left, right) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    if (nums[right] === 0) {
        return 0;
    }

    if (nums[left] === 1) {
        return right - left + 1;
    }

    const mid = Math.floor((left + right) / 2);
    return count(nums, left, mid) + count(nums, mid + 1, right);
}

// Example usage:
const nums3 = [0, 0, 0, 0, 1, 1, 1];
console.log(count(nums3, 0, nums3.length - 1)); // Output: 3
