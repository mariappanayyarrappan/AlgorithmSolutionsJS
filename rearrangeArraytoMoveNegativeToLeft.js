// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
// Examples : 

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5


function shiftAll(arr) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0 && arr[right] < 0) {
            left++;
        } else if (arr[left] > 0 && arr[right] < 0) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        } else if (arr[left] > 0 && arr[right] > 0) {
            right--;
        } else {
            left++;
            right--;
        }
    }
}
