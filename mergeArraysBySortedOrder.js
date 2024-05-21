// Given two sorted arrays, X[] and Y[] of size m and n each, merge elements of X[] with elements of array Y[] by maintaining the sorted order, i.e., fill X[] with the first m smallest elements and fill Y[] with remaining elements.

function merge(X, Y) {
    const m = X.length;
    const n = Y.length;

    for (let i = 0; i < m; i++) {
        if (X[i] > Y[0]) {
            let temp = X[i];
            X[i] = Y[0];
            Y[0] = temp;

            let first = Y[0];
            let k;
            for (k = 1; k < n && Y[k] < first; k++) {
                Y[k - 1] = Y[k];
            }
            Y[k - 1] = first;
        }
    }
}
