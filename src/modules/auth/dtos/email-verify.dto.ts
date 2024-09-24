import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class EmailVerifyDto {
  @ApiProperty({ example: 'vhsbdjsdfsd-dfmsdfjsd-sdfnsdk' })
  @IsString()
  verify_token: string;
}
