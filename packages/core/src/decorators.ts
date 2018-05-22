import 'reflect-metadata';

function createCoreDecorator(token) {
  return (target, key, index) => {
    const args = Reflect.getMetadata('self:paramtypes', target) || [];
    const type = typeof token === 'function' ? token.name : token;

    args.push({ index, param: type });
    Reflect.defineMetadata('self:paramtypes', args, target);
  };
}

export function Service(token?: any): ParameterDecorator {
  return createCoreDecorator(token);
}

export function Repository(token?: any): ParameterDecorator {
  return createCoreDecorator(token);
}
