export class GenericClass<T> {
  constructor(params: Partial<T>) {
    Object.assign(this, params);
  }
}
