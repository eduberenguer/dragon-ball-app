export interface Repository<X> {
  getAll: (currentPage: number) => Promise<X>;
}
