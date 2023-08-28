interface Collection<E> extends Iterable<E> {
  add(e: E): boolean

  addAll(collection: Collection<E>): boolean

  clear(): void

  contains(object: any): boolean

  containsAll(collection: Collection<any>): boolean

  isEmpty(): boolean

  remove(object: any): boolean

  removeAll(collection: any): boolean

  removeIf(filter: () => boolean): boolean

  retainAll(collection: Collection<any>): boolean

  size(): number
}

export default Collection