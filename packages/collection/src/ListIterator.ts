interface ListIterator<E> extends Iterator<E> {
  previous(): IteratorResult<E>

  nextIndex(): number

  previousIndex(): number

  remove(): void

  set(): void

  add(): void
}

export default ListIterator