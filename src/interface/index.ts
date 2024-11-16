export interface IYard {
  name: string;
  image: string;
  description: string;
  price: number;
  id: number;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}