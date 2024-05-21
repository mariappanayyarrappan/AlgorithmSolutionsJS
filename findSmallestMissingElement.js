// Given a sorted array of non-negative distinct integers, find the smallest missing non-negative element in it.
// Input:  nums[] = [0, 1, 2, 6, 9, 11, 15]
// Output: The smallest missing element is 3

function findSmallestMissing(nums, left, right) {
    if (left > right) {
        return left;
    }

    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === mid) {
        return findSmallestMissing(nums, mid + 1, right);
    } else {
        return findSmallestMissing(nums, left, mid - 1);
    }
}

// Example usage:
const nums2 = [0, 1, 2, 6, 9, 11, 15];
console.log(findSmallestMissing(nums2, 0, nums2.length - 1)); // Output: 3
