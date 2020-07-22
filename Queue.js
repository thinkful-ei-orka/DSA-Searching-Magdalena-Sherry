const _Node = require('./Node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    
    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }

    //make new node last item on the queue
    this.last = node;
  }

  dequeue() {
    //if queue is empty, there is nothing to return
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is last item in the queue
    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;