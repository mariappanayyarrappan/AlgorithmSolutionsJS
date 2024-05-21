// Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.
// For Example: A[] = {10, 20, 35, 50, 75, 80} and the value of X = 110

function isPairSum(A, N, X) {
    let i = 0;
    let j = N - 1;

    while (i < j) {
        if (A[i] + A[j] === X) {
            return true;
        } else if (A[i] + A[j] < X) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}

// Example usage
let A = [10, 20, 35, 50, 75, 80];
let X = 110;
console.log(isPairSum(A, A.length, X)); // Output: true
