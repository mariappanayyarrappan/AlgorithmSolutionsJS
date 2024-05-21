// Given a nearly sorted array such that each of the n elements may be misplaced by no more than one position from the correct sorted order, search a given element in it efficiently. Report if the element is not present in the array. An element at index i in a correctly sorted order can be misplaced by the ± 1 position, i.e., it can be present at index i-1 or i or i+1 in the input array.
// nums = [2, 1, 3, 5, 4, 7, 6, 8, 9]
// target = 5
// Output: Element 5 found at index 3

function searchElement(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (mid - 1 >= left && nums[mid - 1] === target) {
            return mid - 1;
        } else if (mid + 1 <= right && nums[mid + 1] === target) {
            return mid + 1;
        } else if (target > nums[mid]) {
            left = mid + 2;
        } else {
            right = mid - 2;
        }
    }
    return -1;
}

// Example usage:
const nums5 = [2, 1, 3, 5, 4, 7, 6, 8, 9];
const target5 = 5;
console.log(searchElement(nums5, target5)); // Output: 3
