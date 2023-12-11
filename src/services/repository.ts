export interface Repository<X> {
  getAll: (currentPage: number) => Promise<X>;
  getItemById: (id: string) => Promise<X>;
  getCharactersByOptions: (filters: {
    race: string;
    affiliation: string;
  }) => Promise<X>;
}
