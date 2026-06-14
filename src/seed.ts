import { config as loadEnv } from 'dotenv'
import { getPayload } from 'payload'

loadEnv()

const services = [
  {
    name: 'Női hajvágás',
    description: 'Rövid, félhosszú vagy hosszú haj precíz vágása, formázással.',
    price: '6.000 Ft-tól',
    category: 'hajvagas',
    order: 1,
  },
  {
    name: 'Férfi hajvágás',
    description: 'Klasszikus és modern átmenetes vágások.',
    price: '4.500 Ft-tól',
    category: 'hajvagas',
    order: 2,
  },
  {
    name: 'Styling / Beszárítás',
    description: 'Alkalmi vagy mindennapi volumennövelő beszárítás, hullámosítás.',
    price: '4.000 Ft-tól',
    category: 'hajvagas',
    order: 3,
  },
  {
    name: 'Tőfestés',
    description: 'Lenövés eltüntetése, ősz haj fedése kíméletes anyagokkal.',
    price: '8.000 Ft-tól',
    category: 'szinvaltoztatas',
    order: 4,
  },
  {
    name: 'Teljes festés',
    description: 'Egyenletes, ragyogó tónus a haj teljes hosszán.',
    price: '12.000 Ft-tól',
    category: 'szinvaltoztatas',
    order: 5,
  },
  {
    name: 'Balayage / Ombre',
    description:
      'Természetes, napcsókolta hatás vagy kontrasztos átmenetek (tartalmazza az árnyalást).',
    price: '22.000 Ft-tól',
    category: 'szinvaltoztatas',
    order: 6,
  },
  {
    name: 'Klasszikus Melír',
    description: 'Fóliás technika a dimenzionált hajszínért.',
    price: '15.000 Ft-tól',
    category: 'szinvaltoztatas',
    order: 7,
  },
] as const

async function seed() {
  const { default: config } = await import('./payload.config')
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('Beállítások (Settings) frissítése...')
  await payload.updateGlobal({
    slug: 'settings',
    data: {
      companyName: 'Dorina Fodrász',
      phone: '+36 70 328 0824',
      address: 'Miskolc, Széchenyi István utca környéke',
      facebook: 'https://www.facebook.com/dorinafodraszmiskolc',
      instagram: 'https://www.instagram.com/tdorinaa',
      openingHours: [
        { day: 'Hétfő - Péntek', hours: 'Előzetes bejelentkezés alapján' },
        { day: 'Szombat', hours: 'Rugalmasan (alkalmi)' },
        { day: 'Vasárnap', hours: 'Zárva' },
      ],
    },
  })

  console.log('Szolgáltatások (Services) feltöltése...')
  const existing = await payload.find({ collection: 'services', limit: 1 })
  if (existing.totalDocs === 0) {
    for (const service of services) {
      await payload.create({ collection: 'services', data: service })
    }
  } else {
    console.log('A szolgáltatások már léteznek, kihagyva.')
  }

  console.log('Kész!')
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
