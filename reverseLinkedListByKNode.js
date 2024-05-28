// Given a linked list, write a function to reverse every k nodes (where k is an input to the function). 
// Input: 1->2->3->4->5->6->7->8->NULL, K = 3 
// Output: 3->2->1->6->5->4->8->7->NULL 
// Input: 1->2->3->4->5->6->7->8->NULL, K = 5 
// Output: 5->4->3->2->1->8->7->6->NULL

class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverse(head, k) {
    if (head === null) return null;

    let current = head;
    let next = null;
    let prev = null;
    let count = 0;

    while (count < k && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    if (next !== null) {
        head.next = reverse(next, k);
    }

    return prev;
}
