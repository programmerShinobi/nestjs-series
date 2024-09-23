import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @ApiProperty({ example: 'Faqih' })
  @Column({ type: 'varchar', length: 50 })
  first_name: string;

  @ApiProperty({ example: 'Pratama Muhti' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  last_name: string;

  @ApiProperty({ example: 'example@shinobi.com' })
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @ApiProperty({ example: 'StrongP@ssword123' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @ApiHideProperty()
  @Column({ type: 'timestamp with time zone', nullable: true })
  email_verified_at: Date;

  @ApiHideProperty()
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tokens: string;
}
