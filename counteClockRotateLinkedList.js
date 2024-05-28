// Given a singly linked list, The task is to rotate the linked list counter-clockwise by k nodes.

// Input: linked list = 10->20->30->40->50->60, k = 4
// Output: 50->60->10->20->30->40.


class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rotate(head, k) {
    if (k === 0) return head;

    let current = head;
    let count = 1;

    while (count < k && current !== null) {
        current = current.next;
        count++;
    }

    if (current === null) return head;

    let kthNode = current;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = head;
    head = kthNode.next;
    kthNode.next = null;

    return head;
}
