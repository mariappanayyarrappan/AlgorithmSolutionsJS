// Given an array of integers, you have to find three numbers such that the sum of two elements equals the third element.
// Input : {5, 32, 1, 7, 10, 50, 19, 21, 2}
// Output : 21, 2, 19
function findTriplet(arr, n) {
    arr.sort((a, b) => a - b);

    for (let i = n - 1; i >= 0; i--) {
        let j = 0;
        let k = i - 1;

        while (j < k) {
            if (arr[i] === arr[j] + arr[k]) {
                console.log("numbers are " + arr[i] + " " + arr[j] + " " + arr[k]);
                return;
            } else if (arr[i] > arr[j] + arr[k]) {
                j++;
            } else {
                k--;
            }
        }
    }

    console.log("No such triplet exists");
}

// Example usage
let arr3 = [5, 32, 1, 7, 10, 50, 19, 21, 2];
findTriplet(arr3, arr3.length); // Output: 21, 2, 19
