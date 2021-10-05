interface HeapNode {
  key: number;
  value: any;
}

class Heap {
  protected heap: HeapNode[] = [];

  private getLeftChildIndex = (parentIndex: number) => parentIndex * 2 + 1;
  private getRightChildIndex = (parentIndex: number) => parentIndex * 2 + 2;
  private getParentIndex = (childIndex: number) =>
    Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = (key: number, value: any) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  };

  private heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    // 루트노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모가 자식보다 크면 부모의 자리를 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  private heapifiDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    // left child가 있을 때 까지 반복;
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // rightChild가 있다면 leftChild와 키를 비교해서 더 작은 값을 찾는다.
      // 없다면 leftChild가 더 자긍ㄴ 값을 가지는 인덱스가 된다.
      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }
    this.heap[index] = rootNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      // 끝에 있는 노드를 부모로 만들고
      this.heap[0] = this.heap.pop();
      // 다시 min heap 형태를 갖추도록 한다.
      // this.heapifyDown();
    }
    return rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority: number, value: any) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}
