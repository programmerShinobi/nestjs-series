import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { strongPasswordConfig } from 'src/modules/auth/strong-password.config';

export class LoginDto {
  @ApiProperty({ example: 'example@shinobi.com' })
  @IsEmail()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.toLowerCase() : value,
  )
  email: string;

  @ApiProperty({ example: 'StrongP@ssword123' })
  @IsString()
  @IsStrongPassword(strongPasswordConfig)
  password: string;
}
