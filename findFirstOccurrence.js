// Given a sorted integer array, find the index of a given number’s first occurrence. If the element is not present in the array, report that as well.
  
function findFirstOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            result = mid;
            right = mid - 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
}

// Example usage:
const nums6 = [1, 2, 2, 3, 4, 5];
const target6 = 2;
console.log(findFirstOccurrence(nums6, target6)); // Output: 1
