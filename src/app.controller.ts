import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './validators/create-team-member-body';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  getHello() {
    return { message: 'Hello World' };
  }

  @Post('newMember')
  async postMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        name,
        function: memberFunction,
      },
    });

    return member;
  }
}
