// Given an integer array arr[], the task is to find the length of the longest subarray with an equal number of odd and even elements.

function maxSubarrayLength(A) {
    let maxLen = 0;
    let curr_sum = 0;
    let hash = new Map();

    for (let i = 0; i < A.length; i++) {
        curr_sum += A[i] % 2 === 0 ? -1 : 1;

        if (curr_sum === 0) {
            maxLen = Math.max(maxLen, i + 1);
        }

        if (hash.has(curr_sum)) {
            maxLen = Math.max(maxLen, i - hash.get(curr_sum));
        } else {
            hash.set(curr_sum, i);
        }
    }
    return maxLen;
}

// Example usage
let arr5 = [1, 2, 1, 2];
console.log(maxSubarrayLength(arr5)); // Output: 4
