import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsStrongPassword } from 'class-validator';
import { strongPasswordConfig } from 'src/modules/auth/strong-password.config';

export class ResetPasswordDto {
  @ApiProperty({ example: 'StrongP@ssword123' })
  @IsString()
  @IsStrongPassword(strongPasswordConfig)
  password: string;

  @ApiProperty({ example: 'vhsbdjsdfsd-dfmsdfjsd-sdfnsdk' })
  @IsString()
  reset_token: string;
}
