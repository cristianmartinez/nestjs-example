import { Repository } from '../decorators';
import { Observable, of } from 'rxjs';
import { ProductModel } from './product.model';

const products: ProductModel[] = [
  { id: '1', name: 'Book', price: 11 },
  { id: '2', name: 'Computer', price: 1500 },
  { id: '3', name: 'Pen', price: 3 },
];

export abstract class ProductRepositoryContract {
  abstract getAllProducts(): Observable<ProductModel[]>;
  abstract getProductById(productId: string): Observable<ProductModel>;
}

@Repository()
export class ProductRepository implements ProductRepositoryContract {
  getAllProducts(): Observable<ProductModel[]> {
    return of(products);
  }

  getProductById(productId: string): Observable<ProductModel> {
    return of(products.find(product => product.id === productId));
  }
}
