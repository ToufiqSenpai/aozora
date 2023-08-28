import Collection from "./Collection";
import ListIterator from "./ListIterator";

interface List<E> extends Collection<E> {
  get(index: number): E
  indexOf(object: E): number
  lastIndexOf(object: any): number
  listIterator(): ListIterator<E>
  listIterator(index: number): ListIterator<E>
  remove()
  subList(fromIndex: number, toIndex: number): List<E>
}

export default List