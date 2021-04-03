import { TheIterator } from "./TheIterator";
import { Instance } from "./Instance";

export class ListIterator<T> implements TheIterator<T> {
    head: Instance<T>;
    pointer: Instance<T>;

    constructor(head: Instance<T>){
        this.head = head;
        this.pointer = head;
    }

    hasNext(): boolean {
        if(this.pointer){
            return true;
        }
        else{
            return false;
        }
    }

    next(): Instance<T> {
        if(this.hasNext()){
            let temp = this.pointer;
            this.pointer = this.pointer.getNext(); //Advance pointer to next item
            return temp;
        }
        else{
            throw new RangeError("Iterator is empty!");
        }
    }
}