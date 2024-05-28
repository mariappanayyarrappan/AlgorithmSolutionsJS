// Delete last occurrence of an item from linked list.
// Created Linked list: 1 --> 2 --> 3 --> 4 --> 5 --> 4 --> 4 --> NULL
// List after deletion of 4: 1 --> 2 --> 3 --> 4 --> 5 --> 4 --> NULL

class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteLast(head, x) {
    let temp = head;
    let ptr = null;

    while (temp !== null) {
        if (temp.val === x) {
            ptr = temp;
        }
        temp = temp.next;
    }

    if (ptr !== null && ptr.next === null) {
        temp = head;
        while (temp.next !== ptr) {
            temp = temp.next;
        }
        temp.next = null;
    }

    if (ptr !== null && ptr.next !== null) {
        ptr.val = ptr.next.val;
        temp = ptr.next;
        ptr.next = ptr.next.next;
    }

    return head;
}

