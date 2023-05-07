import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocketseat-member-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        name,
        function: memberFunction,
      },
    });
  }
}
