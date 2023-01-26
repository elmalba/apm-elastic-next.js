import { PrismaClient } from '@prisma/client'
import apm from 'elastic-apm-node'


const prismaDB = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
    ],
  }) 



prismaDB.$on('query', async (request) => {

    console.log("REE",request)
    const name = request.query
    const type = 'db';
    const subType = 'prisma';
    const action = 'query';

    const apmSpan = apm.startSpan(name, type, subType, action);

    apmSpan && apmSpan.end();


  });

export const prisma = prismaDB
//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
