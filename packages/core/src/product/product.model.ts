export interface ProductModel {
  id: number | string;
  name: string;
  price: number;
  rate: number;
  formattedPrice?: string;
}
