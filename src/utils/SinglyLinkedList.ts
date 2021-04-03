import { LinkedList } from "./LinkedList";
import { Instance } from "./Instance";
import { ListIterator } from "./ListIterator";

export class SinglyLinkedList<T> implements LinkedList<T>{
    public head: Instance<T>;
    public tail: Instance<T>;
    public prev: Instance<T>;
    public size: number;
    
    constructor(head?: T){
        if(head){
            this.head = new Instance(head, null);
            this.tail = this.head;
            this.prev = null;
            this.size = 1;
        }
        else{
            this.head = null;
            this.tail = null;
            this.prev = null;
            this.size = 0;
        }
    }

    add(node: T): boolean {
        if (this.size == 0){
            this.head = new Instance(node, null);
            this.tail = this.head;
            this.size = 1;
            return true;
        }
        if (this.findOne(node)){
            return false; //Node already presented in the Singly List
        }
        this.tail.setNext(new Instance(node, null));
        this.tail = this.tail.getNext();
        this.size++;
        return true;
    }

    findOne(node: T): boolean {
        let listIterator = new ListIterator(this.head);
        while(listIterator.hasNext()){
            let item = listIterator.next();
            if(item.equals(node)){
                return true;
            }
        }
        return false;
    }

    getFront(): T {
        return this.head.getData();
    }

    getLast(): T {
        return this.tail.getData();
    }

    getOne(node: T): Instance<T> {
        let listIterator = new ListIterator(this.head);
        while(listIterator.hasNext()){
            let item = listIterator.next();
            if(item.equals(node)){
                return item;
            }
            this.prev = item;
        }
        return null;
    }

    delete(node: T): boolean {
        let temp = this.getOne(node);
        if(this.head.equals(node)){
            this.removeFront();
            return true;
        }
        if(this.tail.equals(node)){
            this.removeLast();
            return true;
        }
        if(temp){
            this.prev.setNext(temp.getNext());
            this.size--;
            return true;
        }
        return false;
    }

    removeFront(): void {
        if(this.head){
            this.head = this.head.getNext();
            this.size--;
        }
        else{
            throw new Error('List is empty!');
        }
    }

    removeLast(): void {
        if(this.tail){
            this.tail = this.prev;
            this.tail.setNext(null);
            this.size--;
        }
        else{
            throw new Error('List is empty!');
        }
    }

    getSize(): number {
        return this.size;
    }

    toString(): String {
        let listIterator = new ListIterator(this.head);
        let items: String = "{ ";
        
        while(listIterator.hasNext()){
            items += `${listIterator.next().getData().toString()} `;
        }
        return items + "}";
    }
}