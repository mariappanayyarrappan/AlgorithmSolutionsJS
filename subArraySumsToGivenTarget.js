// Given an unsorted array of integers, find a subarray that adds to a given number. If there is more than one subarray with the sum of the given number, print any of them.

function subArraySum(arr, targetSum) {
    let cur_sum = 0;
    let start = 0;
    let end = -1;
    let hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        cur_sum += arr[i];

        if (cur_sum - targetSum === 0) {
            start = 0;
            end = i;
            break;
        }

        if (hashMap.has(cur_sum - targetSum)) {
            start = hashMap.get(cur_sum - targetSum) + 1;
            end = i;
            break;
        }

        hashMap.set(cur_sum, i);
    }

    if (end === -1) {
        console.log("No subarray with given sum exists");
    } else {
        console.log(`Sum found between indexes ${start} to ${end}`);
    }
}

// Example usage
let arr3 = [1, 4, 20, 3, 10, 5];
let targetSum = 33;
subArraySum(arr3, targetSum); // Output: Sum found between indexes 2 to 4
