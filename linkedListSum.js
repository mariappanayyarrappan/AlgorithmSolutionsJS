// Add 1 to a number represented as linked list.
// For example 1999 is represented as (1-> 9-> 9 -> 9) and adding 1 to it should change it to (2->0->0->0) 

class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addOneUtil(head) {
    let res = head;
    let temp = null, prev = null;
    let carry = 1, sum;

    while (head !== null) {
        sum = carry + head.val;
        carry = (sum >= 10) ? 1 : 0;
        sum = sum % 10;
        head.val = sum;
        temp = head;
        head = head.next;
    }

    if (carry > 0) {
        temp.next = new Node(carry);
    }

    return res;
}

function reverse(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

function addOne(head) {
    head = reverse(head);
    head = addOneUtil(head);
    return reverse(head);
}
