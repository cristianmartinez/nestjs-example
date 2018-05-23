import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CoreModule } from '../core';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [CoreModule],
  controllers: [ProductController],
  providers: [ProductResolver]
})
export class ProductModule {}
