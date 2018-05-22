import { Module, Provider } from '@nestjs/common';
import { ProductService } from '@medellinjs/core';
import { ProductRepository, ProductRepositoryContract } from '@medellinjs/core';

function createRepositoryProvider(contractClass, finalClass): Provider {
  return {
    provide: contractClass,
    useClass: finalClass,
  };
}

const SERVICES = [ProductService];
const REPOSITORIES = [
  createRepositoryProvider(ProductRepositoryContract, ProductRepository),
];

@Module({
  providers: [...SERVICES, ...REPOSITORIES],
  exports: [...SERVICES],
})
export class CoreModule {}
