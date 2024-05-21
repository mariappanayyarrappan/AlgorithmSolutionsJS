// Given an array containing only 0s and 1s, find the largest subarray which contains equal no of 0s and 1s.

function maxLen(arr) {
    let hM = new Map();
    let sum = 0;
    let max_len = 0;
    let ending_index = -1;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] === 0 ? -1 : 1;
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            max_len = i + 1;
            ending_index = i;
        }

        if (hM.has(sum)) {
            if (max_len < i - hM.get(sum)) {
                max_len = i - hM.get(sum);
                ending_index = i;
            }
        } else {
            hM.set(sum, i);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] === -1 ? 0 : 1;
    }

    console.log(`${ending_index - max_len + 1} to ${ending_index}`);
    return max_len;
}

// Example usage
let arr4 = [0, 0, 1, 1, 0];
console.log(maxLen(arr4)); // Output: 0 to 3
