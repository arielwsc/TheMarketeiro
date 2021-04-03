import { Instance } from "./Instance";

export interface LinkedList<T> {
    head: Instance<T>;
    tail: Instance<T>;
    size: number;
}