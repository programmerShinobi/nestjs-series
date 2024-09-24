import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { strongPasswordConfig } from 'src/modules/auth/strong-password.config';

export class RegisterDto {
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

  @ApiProperty({ example: 'Faqih' })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: 'Pratama Muhti' })
  @IsString()
  @IsNotEmpty()
  last_name: string;
}
