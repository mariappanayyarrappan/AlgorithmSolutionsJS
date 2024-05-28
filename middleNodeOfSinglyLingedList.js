// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.
// 1->2->3->4->5

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
