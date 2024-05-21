// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
function minMeetingRooms(intervals) {
    const times = new Map();
    
    for (const [start, end] of intervals) {
        times.set(start, (times.get(start) || 0) + 1); // start time
        times.set(end, (times.get(end) || 0) - 1); // end time
    }
    
    let count = 0;
    let maxRooms = 0;
    const sortedTimes = Array.from(times.entries()).sort((a, b) => a[0] - b[0]);
    
    for (const [time, val] of sortedTimes) {
        count += val;
        maxRooms = Math.max(maxRooms, count);
    }
    
    return maxRooms;
}

// Example usage:
const intervals = [[0, 30], [5, 10], [15, 20]];
console.log(minMeetingRooms(intervals)); // Output: 2
