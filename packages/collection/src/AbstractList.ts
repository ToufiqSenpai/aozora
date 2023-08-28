import AbstractCollection from "./AbtstractCollection";
import List from "./List";
import ListIterator from "./ListIterator";

abstract class AbstractList<E> extends AbstractCollection<E> implements List<E> {
  public override add(e: E): boolean {
      
  }

  indexOf(object: any): number {
    throw new Error("Method not implemented.");
  }
  listIterator(): ListIterator<E>;
  listIterator(index: number): ListIterator<E>;
  listIterator(index?: unknown): import("./ListIterator").default<E> {
    throw new Error("Method not implemented.");
  }
  subList(fromIndex: number, toIndex: number): List<E> {
    throw new Error("Method not implemented.");
  }
}

export default AbstractList