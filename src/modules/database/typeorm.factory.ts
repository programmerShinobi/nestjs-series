import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import OrmConfig from '../../../ormconfig';

@Injectable()
export class TypeOrmConfigFactory implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return OrmConfig.options;
  }
}
