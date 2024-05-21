// Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).

function printMajority(a) {
    let cand = findCandidate(a);

    if (isMajority(a, cand)) {
        console.log(` ${cand} `);
    } else {
        console.log("No Majority Element");
    }
}

function findCandidate(a) {
    let maj_index = 0, count = 1;

    for (let i = 1; i < a.length; i++) {
        if (a[maj_index] === a[i]) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            maj_index = i;
            count = 1;
        }
    }
    return a[maj_index];
}

function isMajority(a, cand) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === cand) {
            count++;
        }
    }

    return count > a.length / 2;
}

// Example usage
let arr6 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
printMajority(arr6); // Output: 4
