// Given a list containing future prediction of share prices, find the maximum profit earned by buying and selling shares any number of times with the constraint, a new transaction can only start after the previous transaction is complete, i.e., we can only hold at most one share at a time.
function findMaxProfit(prices) {
    let profit = 0;
    let j = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i - 1]) {
            j = i;
        }

        if (prices[i - 1] <= prices[i] && (i + 1 === prices.length || prices[i] > prices[i + 1])) {
            profit += prices[i] - prices[j];
            console.log(`Buy on day ${j + 1} and sell on day ${i + 1}`);
        }
    }

    return profit;
}

// Example usage
let prices2 = [1, 5, 2, 3, 7, 6, 4, 5];
console.log(findMaxProfit(prices2)); // Output: 10
