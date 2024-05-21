// Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Examples: Input: arr[] = {0, -1, 2, -3, 1}
// Output: (0 -1 1), (2 -3 1)
// Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

function findTriplets(arr, n) {
    arr.sort((a, b) => a - b);
    let found = false;

    for (let i = 0; i < n - 1; i++) {
        let l = i + 1;
        let r = n - 1;
        let x = arr[i];

        while (l < r) {
            if (x + arr[l] + arr[r] === 0) {
                console.log(x, arr[l], arr[r]);
                l++;
                r--;
                found = true;
            } else if (x + arr[l] + arr[r] < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    if (!found) {
        console.log("No Triplet Found");
    }
}

// Example usage
let arr1 = [0, -1, 2, -3, 1];
findTriplets(arr1, arr1.length); // Output: 0 -1 1, 2 -3 1

let arr2 = [1, -2, 1, 0, 5];
findTriplets(arr2, arr2.length); // Output: 1 -2 1

