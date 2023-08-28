import Collection from "./Collection";

abstract class AbstractCollection<E> implements Collection<E> {
  public add(e: E): boolean {
    throw new Error("Method not implemented.");
  }

  public addAll(collection: Collection<E>): boolean {
    let modified = false
    for(const element of collection)
      if(this.add(element))
        modified = true
    return modified
  }
  
  public clear(): void {
    throw new Error("Method not implemented.");
  }

  public contains(object: any): boolean {
    const it = this[Symbol.iterator]()

    while(!it.next().done) {
      if(it.next().value == object) 
        return true
    }

    return false
  }

  public containsAll(collection: Collection<any>): boolean {
    for(const e of collection)
      if(!this.contains(e))
        return false
    return true
  }

  public isEmpty(): boolean {
    return this.size() == 0
  }

  public remove(object: any): boolean {
    throw new Error("Method not implemented.");
  }
  public removeAll(collection: any): boolean {
    throw new Error("Method not implemented.");
  }

  public removeIf(filter: () => boolean): boolean {
    throw new Error("Method not implemented.");
  }

  public retainAll(collection: Collection<any>): boolean {
    throw new Error("Method not implemented.");
  }

  public abstract size(): number 

  public abstract [Symbol.iterator](): Iterator<E, any, undefined> 
}

export default AbstractCollection