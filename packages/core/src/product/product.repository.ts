import { Repository } from '../decorators';
import { Observable, of } from 'rxjs';
import { ProductModel } from './product.model';

const products: ProductModel[] = [
  { id: '1', name: 'Book', price: 11, rate: 4 },
  { id: '2', name: 'Computer', price: 1500, rate: 6 },
  { id: '3', name: 'Pen', price: 3, rate: 8 },
  { id: '4', name: 'Shoes', price: 20, rate: 10 },
];

export abstract class ProductRepositoryContract {
  abstract getAllProducts(): Observable<ProductModel[]>;
  abstract getProductById(productId: string): Observable<ProductModel>;
  abstract getProductsWhere(
    predicate: (product: ProductModel) => boolean,
  ): Observable<ProductModel[]>;
}

@Repository()
export class ProductRepository implements ProductRepositoryContract {
  getAllProducts(): Observable<ProductModel[]> {
    return of(products);
  }

  getProductById(productId: string): Observable<ProductModel> {
    return of(products.find(product => product.id === productId));
  }

  getProductsWhere(
    predicate: (product: ProductModel) => boolean,
  ): Observable<ProductModel[]> {
    return of(products.filter(predicate));
  }
}
