import apm from 'elastic-apm-node'


import { prisma } from '../../db'

export default async function handler(req, res) {

    var span = apm.startSpan('call DB')


    const parks = await prisma.parks.findMany({
        include: {
            region: true,
        },
    })

    res.status(200).json(parks)

    if (span) span.end()

}
