export interface Repository<X> {
  getAll: (currentPage: number) => Promise<X>;
  getItemById: (id: string) => Promise<X>;
}
