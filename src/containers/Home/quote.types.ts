export interface IQuote {
  firebaseId: string;
  text: string;
  readonly author: string;
  categoryId: string;
}
