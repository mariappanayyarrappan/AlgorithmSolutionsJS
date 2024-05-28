// Given the heads of two singly linked lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:

// a1-> a2 ->
                 // c1 -> c2 -> -> c3
// b1-> b2 -> b3

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    let lenA = 0, lenB = 0;
    let currA = headA, currB = headB;

    while (currA !== null) {
        lenA++;
        currA = currA.next;
    }

    while (currB !== null) {
        lenB++;
        currB = currB.next;
    }

    currA = headA;
    currB = headB;

    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            currA = currA.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            currB = currB.next;
        }
    }

    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }

    return currA;
}
