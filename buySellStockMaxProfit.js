// Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible for buying and selling the stocks on different days using transactions where at most one transaction is allowed.
// Note: Stock must be bought before being sold.

// Input: prices[] = {7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation:
// The lowest price of the stock is on the 2nd day, i.e. price = 1. Starting from the 2nd day, the highest price of the stock is witnessed on the 5th day, i.e. price = 6. 
// Therefore, maximum possible profit = 6 – 1 = 5.

function maxProfit(prices) {
    let buy = prices[0];
    let max_profit = Number.NEGATIVE_INFINITY;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else if (prices[i] - buy > max_profit) {
            max_profit = prices[i] - buy;
        }
    }
    return max_profit;
}

// Example usage
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5
