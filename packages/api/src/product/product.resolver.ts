import {Resolver, Query} from "@nestjs/graphql";
import {ProductService} from "@medellinjs/core";


@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query()
  async product(obj, args) {
    return await this.productService.getProductById(args.id).toPromise();
  }

  @Query()
  async products() {
    return await this.productService.getAllProducts().toPromise();
  }

  @Query()
  async bestProducts() {
    return await this.productService.getBestProducts().toPromise();
  }
}
