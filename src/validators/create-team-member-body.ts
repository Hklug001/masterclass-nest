import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty({ message: 'The member team function should not be empty' })
  function: string;
}
