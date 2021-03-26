class LinkedList<T>{
    private head: Instance<T>;
    private size: number;
    
    constructor(head?: T){
        this.head = new Instance<T>(head, null) || null;
        head? this.size = 1 : this.size = 0;
    }
}

class Instance<T>{
    readonly data: T;
    readonly next: Instance<T>;

    constructor(data: T, next: Instance<T>){
        this.data = data;
        this.next = next;
    }

    public getData(): T {
        return this.data;
    }
}