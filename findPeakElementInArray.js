// Given an integer array, find the peak element in it. A peak element is an element that is greater than its neighbours. There might be multiple peak elements in an array, and the solution should report any peak element.
// Input : [8, 9, 10, 2, 5, 6]
// Output: The peak element is 10 (or 6)


function findPeakElement(nums, left, right) {
    const mid = Math.floor((left + right) / 2);

    if ((mid === 0 || nums[mid - 1] <= nums[mid]) && (mid === nums.length - 1 || nums[mid + 1] <= nums[mid])) {
        return mid;
    }

    if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
        return findPeakElement(nums, left, mid - 1);
    }

    return findPeakElement(nums, mid + 1, right);
}

function findPeakElementWrapper(nums) {
    if (nums === null || nums.length === 0) {
        throw new Error("Invalid input");
    }

    const index = findPeakElement(nums, 0, nums.length - 1);
    return nums[index];
}

// Example usage:
const nums4 = [8, 9, 10, 2, 5, 6];
console.log(findPeakElementWrapper(nums4)); // Output: 10 (or 6)
