// 3.	Given a schedule containing the arrival and departure time of trains in a station, find the minimum number of platforms needed to avoid delay in any train’s arrival.
// Example: Trains arrival   = { 2.00, 2.10, 3.00, 3.20, 3.50, 5.00 }
// Trains departure =              { 2.30, 3.40, 3.20, 4.30, 4.00, 5.20 }
 
// The minimum platforms needed is 2
function findMinPlatforms(arrival, departure) {
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    let count = 0;
    let platforms = 0;
    let i = 0, j = 0;

    while (i < arrival.length) {
        if (arrival[i] < departure[j]) {
            platforms = Math.max(platforms, ++count);
            i++;
        } else {
            count--;
            j++;
        }
    }

    return platforms;
}
