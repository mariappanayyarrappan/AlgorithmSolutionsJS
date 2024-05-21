// Given an array of integers, move all the zeros to the end of the array while maintaining the relative order of the other elements. 
// Input: Arr[]={10,23,0,53,0,21,0}
// Output: Arr[]={10,23,53,21,0,0,0}

function moveZeroes(nums) {
    if (nums === null || nums.length === 0) {
        return;
    }

    let i = 0;
    for (let num of nums) {
        if (num !== 0) {
            nums[i++] = num;
        }
    }

    while (i < nums.length) {
        nums[i++] = 0;
    }
}

// Example usage
let arr = [10, 23, 0, 53, 0, 21, 0];
moveZeroes(arr);
console.log(arr); // Output: [10, 23, 53, 21, 0, 0, 0]
