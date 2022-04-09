export interface Product {
  startsWith(search: (event: any) => void): unknown;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}