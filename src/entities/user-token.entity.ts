import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity as User } from './user.entity';
import { BaseEntity } from './base.entity';

export enum TokenType {
  REGISTER_VERIFY = 'REGISTER_VERIFY',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

@Entity({ name: 'user_tokens' })
export class UserTokenEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  token: string;

  @Column({ type: 'boolean', default: false })
  is_used: boolean;

  @Column({ type: 'enum', enum: TokenType })
  type: TokenType;

  @Column({ type: 'timestamp' })
  expires_at: Date;

  @Column({ type: 'uuid' })
  user_id: string;

  @ManyToOne(() => User, (user) => user?.tokens)
  @JoinColumn({ name: 'user_id' })
  user: User;

  // This decorator allows to run before insert command
  // setting up token automatically before insert
  @BeforeInsert()
  async generateToken() {
    // generate long token for registration and forgot password
    this.token = `${randomStringGenerator()}-${randomStringGenerator()}`;
  }
}
