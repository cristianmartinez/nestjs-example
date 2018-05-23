import { Service } from '../decorators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductRepositoryContract } from './product.repository';
import { ProductModel } from './product.model';

@Service()
export class ProductService {
  constructor(private productRepository: ProductRepositoryContract) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this.productRepository
      .getAllProducts()
      .pipe(map((products: any) => products.map(this.prepareProduct)));
  }

  getProductById(productId: string): Observable<ProductModel> {
    return this.productRepository
      .getProductById(productId)
      .pipe(map(this.prepareProduct));
  }

  getBestProducts(): Observable<ProductModel[]> {
    return this.productRepository.getProductsWhere(((product: ProductModel) => product.rate > 5));
  }

  private prepareProduct(product: ProductModel): ProductModel {
    return {
      ...product,
      formattedPrice: `USD $${product.price}`,
    };
  }
}
