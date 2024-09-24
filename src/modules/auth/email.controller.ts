import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { RegisterDto } from './dtos/register.dto';
import { EmailVerifyDto } from './dtos/email-verify.dto';
import { LoginDto } from './dtos/login.dto';
import { SendVerifyMailDto } from './dtos/send-verify-mail.dto';
import {
  ApiAcceptedResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

// This is for swagger to aggregate all the APIs under this tag
@ApiTags('Auth Email')
// auth/email is path and it will get suffixed with /v1 as /v1/auth/email
@Controller({
  path: 'auth/email',
  version: '1',
})
export class EmailController {
  // It will be used later now we will just return whatever we get from the body
  constructor(private emailService: EmailService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Register by email' })
  @ApiCreatedResponse({
    description: 'User successfully registered.',
  })
  // this actually overrides the default status code
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return registerDto;
  }

  @Post('/verify')
  @ApiOperation({ summary: 'Verify email address.' })
  @ApiAcceptedResponse({
    description: 'Email verified successfully.',
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async verify(@Body() emailVerifyDto: EmailVerifyDto) {
    return emailVerifyDto;
  }

  @Post('/login')
  @ApiOperation({ summary: 'Log in with Email.' })
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return loginDto;
  }

  @Post('/send-verify-email')
  @ApiOperation({ summary: 'Send verification mail.' })
  @ApiNoContentResponse({
    description: 'Send verification mail.',
  })
  @ApiForbiddenResponse({
    description: 'User already verified.',
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async sendVerifyMail(@Body() sendVerifyMailDto: SendVerifyMailDto) {
    return sendVerifyMailDto;
  }

  @Post('/reset-password-request')
  @ApiOperation({ summary: 'Send reset password mail.' })
  @ApiNoContentResponse({
    description: 'Sent reset password mail.',
  })
  @ApiForbiddenResponse({
    description: 'Please verify email first.',
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async sendForgotMail(@Body() sendForgotMailDto: SendVerifyMailDto) {
    return sendForgotMailDto;
  }
}
