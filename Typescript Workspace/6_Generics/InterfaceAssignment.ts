interface QueueIntf <T>{
    insert(item: T): void;
    remove(): T | undefined;
  }
interface DequeIntf<T> extends QueueIntf<T> {
    insertFront(item: T): void;
    removeLast(): T | undefined;
}
class Deque<T> implements DequeIntf<T> {
    private array: T[];
    constructor(...items: T[]) {
      this.array = items;
    }
    insert(item: T): void {
      this.array.push(item);
    }
    remove(): T | undefined {
      return this.array.shift();
    }
    insertFront(item: T): void {
      this.array.unshift(item);
    }
    removeLast(): T | undefined {
      return this.array.pop();
    }
  }
  // Example usage

  let dequenumbers = new Deque<number>(67,45,89,33,123,45);
  console.log("Initial Deque:", dequenumbers);
  dequenumbers.insert(999); // Insert at last
  console.log("After insert:", dequenumbers);
  dequenumbers.remove(); // Remove from first
  console.log("After remove:", dequenumbers);
  dequenumbers.insertFront(111); // Insert at front
  console.log("After insertFront:", dequenumbers);
  dequenumbers.removeLast(); // Remove from last
  console.log("After removeLast:", dequenumbers);

  let dequestrings=new Deque<string>("pooja",'arun','komal','preeti');
  dequestrings.insert("komal")