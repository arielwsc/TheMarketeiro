import { Instance } from "./Instance";

export interface TheIterator<T> {
    head: Instance<T>;
    pointer: Instance<T>;
    hasNext(): boolean;
    next(): Instance<T>;
}