import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '@medellinjs/core';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  getProductById(@Param('id') productId: string) {
    return this.productService.getProductById(productId);
  }
}
