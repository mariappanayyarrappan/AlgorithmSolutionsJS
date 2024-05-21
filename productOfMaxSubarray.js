// Given an array that contains both positive and negative integers, find the product of the maximum product subarray.
// Input: arr[] = {6, -3, -10, 0, 2}
// Output:   180  // The subarray is {6, -3, -10}

function maxSubarrayProduct(arr) {
    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let temp = Math.max(arr[i], arr[i] * maxEndingHere, arr[i] * minEndingHere);
        minEndingHere = Math.min(arr[i], arr[i] * maxEndingHere, arr[i] * minEndingHere);
        maxEndingHere = temp;
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
