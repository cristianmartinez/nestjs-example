import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CoreModule } from '../core';

@Module({
  imports: [CoreModule],
  controllers: [ProductController],
})
export class ProductModule {}
