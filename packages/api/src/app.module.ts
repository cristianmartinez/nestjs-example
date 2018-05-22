import { Module } from '@nestjs/common';
import { CoreModule } from './core';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CoreModule, ProductModule],
})
export class AppModule {}
