// Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum.
// A[]= { -2, -3, 4, -1, -2, 1, 5, -3 };
function maxSubArraySum(arr) {
    let maxSoFar = Number.MIN_SAFE_INTEGER;
    let maxEndingHere = 0;
    let start = 0, end = 0, s = 0;

    for (let i = 0; i < arr.length; i++) {
        maxEndingHere += arr[i];

        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }

        if (maxEndingHere < 0) {
            maxEndingHere = 0;
            s = i + 1;
        }
    }
    
    console.log("Maximum contiguous sum is " + maxSoFar);
    console.log("Starting index " + start);
    console.log("Ending index " + end);
}
