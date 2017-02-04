const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data, null, null);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var i = 0;
        var node = this._head;
        if (index < this.length) {
            while (index != i) {
                node = node.next ? node.next : node.prev;
                i++;
            }
            return node.data;
        }
        else {
            return -1;
        }
    }

    insertAt(index, data) {
        var newNode = this._head;
        for (var i = 0; i < index; i++) {
            newNode = newNode.next;
            if (i = index) {
                newNode.data = data;
            }
        }
        this.length++;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        if (this.isEmpty()) {
            return this;
        }
        while (this._head.next) {
            this._head = this._head.next;
            this._head.prev = null;
            this.length--;
        }
        this._head.data = null;
        this._tail.data = null;
        this.length--;
        return this;
    }


    deleteAt(index) {
        var nodeDel = this._head;
        var nextNode = nodeDel.next;
        var prevNode = nodeDel.prev;

        if (prevNode == null) {
            this._head = nextNode;
        } else {
            prevNode.next = nextNode;
            nodeDel.prev = null;
        }
        if (nextNode == null) {
            this._tail = prevNode;
        } else {
            nextNode.prev = prevNode;
            nodeDel.next = null;
        }
        nodeDel.data = null;
        this.length--;
        return this;
    }

    reverse() {
        var current = this._head;
        var temp;
        while (current.next) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = temp;
        }
        var head = this._head;
        this._head = this._tail;
        this._tail = head;
        return this;
    }

    indexOf(data) {
        var node = this._head;
        var index = 0;
        var check = false;
        while (index < this.length) {
            if (node.data == data) {
                return index;
                check = true;
            } else {
                node = node.next;
                index++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
