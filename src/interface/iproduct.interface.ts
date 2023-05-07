export interface IProduct {
  id: string;
  price: number;
  title: string;
  description: string;
  image: string;
  category: string;
  count: number;
}

export type PopularProdct = Pick<IProduct, "id" | "price" | "title" | "image">;
