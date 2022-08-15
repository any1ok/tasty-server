import {
  IsNotEmpty,
  isNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[._\-A-Za-z0-9]*$/, { message: '영어와 숫자만 됩니다' })
  password: string;
}
