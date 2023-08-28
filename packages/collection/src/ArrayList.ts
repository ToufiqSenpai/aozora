import AbstractList from "./AbstractList";
import Collection from "./Collection";
import List from "./List";

class ArrayList<E> extends AbstractList<E> implements List<E> {
  private element: E[] = []

  public constructor(collection: Collection<E>) {
    super()


  }

  public clear(): void {
    this.element = []
  }

  get(index: number): E {
    throw new Error("Method not implemented.");
  }
  lastIndexOf(object: any): number {
    throw new Error("Method not implemented.");
  }

  public size(): number {
    return this.element.length
  }
  
  public isEmpty(): boolean {
    return this.element.length == 0
  }

  public indexOf(object: E): number {
    return this.element.indexOf(object)
  }
}