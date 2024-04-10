import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '95132a54-03dc-4529-8f6d-7621edeb9683',
      title: 'Unite Summit 2024',
      slug: 'unite-summit-2024',
      details: 'Um evento p/ devs apaixonados por código!',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})