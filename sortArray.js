// Given an array containing only 0’s, 1’s, and 2’s, sort it in linear time and using constant space.

function threeWayPartition(arr) {
    let start = 0, mid = 0;
    const pivot = 1;
    let end = arr.length - 1;

    while (mid <= end) {
        if (arr[mid] < pivot) { // current element is 0
            swap(arr, start, mid);
            start++;
            mid++;
        } else if (arr[mid] > pivot) { // current element is 2
            swap(arr, mid, end);
            end--;
        } else { // current element is 1
            mid++;
        }
    }
}

// Utility function to swap elements `arr[i]` and `arr[j]` in the array
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
