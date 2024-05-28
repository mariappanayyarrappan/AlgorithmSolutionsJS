// Remove duplicate elements from sorted linked list.
// For example, if the given linked list is 1->2->2->2->5->6 then the output should be 1->2->5->6.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeDuplicates(head) {
    if (head === null) return;

    let prev = head;
    let current = head.next;

    while (current !== null) {
        if (current.val === prev.val) {
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }
}
