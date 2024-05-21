// There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line. The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height. Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.
// Input: heights = [4,2,3,1]
// Output: [0,2,3]
// Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.


function findBuildings(heights) {
    const n = heights.length;
    const ans = [];
    let maxi = heights[n - 1];
    ans.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {
        if (heights[i] > maxi) {
            maxi = heights[i];
            ans.push(i);
        }
    }
    
    return ans.reverse();
}

// Example usage:
const heights = [4, 2, 3, 1];
console.log(findBuildings(heights)); // Output: [0, 2, 3]
