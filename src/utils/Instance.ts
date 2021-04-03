export class Instance<T>{
    private data: T;
    private next: Instance<T>;

    constructor(data: T, next: Instance<T>) {
        this.data = data;
        this.next = next;
    }

    public setNext(next: Instance<T>): void {
        this.next = next;
    }

    public getData(): T {
        return this.data;
    }

    public getNext(): Instance<T> {
        return this.next;
    }

    public equals(node: T): boolean {
        if(this.data === node){
            return true;
        }
        else{
            return false;
        }
    }
}