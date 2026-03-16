export interface ICategory {
  id: string;
  title: string;
}

export const categories: ICategory[] = [
  { id: "all", title: "Все" },
  { id: "motivation", title: "Мотивация" },
  { id: "life", title: "О жизни" },
  { id: "strength", title: "О силе и характере" },
  { id: "other", title: "Другое" },
];
