// Given a linked list, check if the linked list has a loop (cycle) or not. The below diagram shows a linked list with a loop. 
// 1 -> 2 -> 3 
     // l    l 
    //  5 <- 4

class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function detectLoop(head) {
    let slow_p = head, fast_p = head;

    while (slow_p !== null && fast_p !== null && fast_p.next !== null) {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;

        if (slow_p === fast_p) {
            console.log("Loop Found");
            return true;
        }
    }
    console.log("No Loop");
    return false;
}
