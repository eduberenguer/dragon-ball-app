export interface Repository<X> {
  getAll: (currentPage: number) => Promise<X>;
  getItemById: (id: string) => Promise<X>;
  getCharactersByOptions: (option: string, value: string) => Promise<X>;
}
