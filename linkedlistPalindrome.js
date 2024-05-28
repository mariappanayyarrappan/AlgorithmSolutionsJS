// Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.
// Input: R->A->D->A->R->NULL
// Output: Yes


class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
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

function compareLists(head1, head2) {
    let temp1 = head1;
    let temp2 = head2;

    while (temp1 && temp2) {
        if (temp1.val !== temp2.val) {
            return false;
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }

    if (temp1 === null && temp2 === null) {
        return true;
    }

    return false;
}

function isPalindrome(head) {
    let slow_ptr = head, fast_ptr = head;
    let prev_of_slow_ptr = head;
    let midnode = null;
    let res = true;

    if (head !== null && head.next !== null) {
        while (fast_ptr !== null && fast_ptr.next !== null) {
            fast_ptr = fast_ptr.next.next;
            prev_of_slow_ptr = slow_ptr;
            slow_ptr = slow_ptr.next;
        }

        if (fast_ptr !== null) {
            midnode = slow_ptr;
            slow_ptr = slow_ptr.next;
        }

        let second_half = slow_ptr;
        prev_of_slow_ptr.next = null;
        second_half = reverse(second_half);
        res = compareLists(head, second_half);

        second_half = reverse(second_half);

        if (midnode !== null) {
            prev_of_slow_ptr.next = midnode;
            midnode.next = second_half;
        } else {
            prev_of_slow_ptr.next = second_half;
        }
    }

    return res;
}
