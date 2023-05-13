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
interface weeklyReport {
  date: string;
  height: number;
  weight: number;
  bmi: number;
}
interface resWeeklyReport extends weeklyReport {
  _id: string;
}
export interface SignUPData {
  name: string;
  email: string;
  password: string;
  gender: string;
  weeklyReports: Array<weeklyReport>;
}
export interface responce {
  _id: string;
  name: string;
  email: string;
  password: string;
  gender: string;
  weeklyReports: Array<resWeeklyReport>;
}
export interface LoginRes {
  msg: string;
  token: string;
  data: responce[];
}
