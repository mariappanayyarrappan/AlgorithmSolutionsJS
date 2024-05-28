// Given the head of a singly linked list, reverse the list, and return the reversed list.
// 1 -> 2 -> 3 -> 4 -> 5
// 5 -> 4 -> 3 -> 2 -> 1
  
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
