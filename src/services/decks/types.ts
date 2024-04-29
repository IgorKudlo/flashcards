export type Author = {
  id: string;
  name: string;
}

export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
}

export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export type DecksResponse = {
  items: Deck[];
  pagination: Pagination;
}

export type DecksParams = {
  orderBy?: string;
  minCardsCount: number;
  maxCardsCount?: number;
  name?: string;
  authorId?: string;
  currentPage?: number;
  itemsPerPage?: number;
}

export type CreateDeckArgs = {
  cover?: string;
  name: string;
  isPrivate: boolean;
}