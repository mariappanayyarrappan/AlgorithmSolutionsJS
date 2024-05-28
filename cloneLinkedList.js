// Clone a linked list with next and random pointer.
// 1 -> 2 -> 3 -> 4 -> 5


class Node {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function cloneLinkedList(head) {
    if (head === null) return null;

    let curr = head;

    // Step 1: Create a duplicate of each node in the original linked list
    while (curr !== null) {
        let next = curr.next;
        let dup = new Node(curr.val);
        curr.next = dup;
        dup.next = next;
        curr = next;
    }

    // Step 2: Update the random pointers of the duplicated nodes
    curr = head;
    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // Step 3: Extract the duplicate nodes from the modified list
    let dummy = new Node(-1);
    let tail = dummy;
    curr = head;

    while (curr !== null) {
        let next = curr.next.next;
        let dup = curr.next;
        tail.next = dup;
        tail = dup;
        curr.next = next;
        curr = next;
    }

    return dummy.next;
}
