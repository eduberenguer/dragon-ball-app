export interface Repository<X> {
  getAll: () => Promise<X[]>;
}
