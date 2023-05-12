export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface SingleProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Order {
  id: number;
  quantity: number;
  productId: number;
}
export interface Cart extends Order {
  title: string;
  image: string;
}

export interface LoginData {
  email: string;
  password: string;
}
interface IweeklyReport {
  date: string;
  height: number;
  weight: number;
  bmi: number;
}
export interface SignUPData {
  name: string;
  email: string;
  password: string;
  gender: string;
  weeklyReports: Array<IweeklyReport>;
}
