import { config as loadEnv } from 'dotenv'
import { getPayload } from 'payload'

loadEnv()

const resetImages = process.argv.includes('--reset-images')

const services = [
  {
    name: 'Női hajvágás',
    description: 'Rövid, félhosszú vagy hosszú haj precíz vágása, formázással.',
    price: '6.000 Ft-tól',
    category: 'hajvagas',
  },
  {
    name: 'Férfi hajvágás',
    description: 'Klasszikus és modern átmenetes vágások.',
    price: '4.500 Ft-tól',
    category: 'hajvagas',
  },
  {
    name: 'Styling / Beszárítás',
    description: 'Alkalmi vagy mindennapi volumennövelő beszárítás, hullámosítás.',
    price: '4.000 Ft-tól',
    category: 'hajvagas',
  },
  {
    name: 'Tőfestés',
    description: 'Lenövés eltüntetése, ősz haj fedése kíméletes anyagokkal.',
    price: '8.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
  {
    name: 'Teljes festés',
    description: 'Egyenletes, ragyogó tónus a haj teljes hosszán.',
    price: '12.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
  {
    name: 'Balayage / Ombre',
    description:
      'Természetes, napcsókolta hatás vagy kontrasztos átmenetek (tartalmazza az árnyalást).',
    price: '22.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
  {
    name: 'Klasszikus Melír',
    description: 'Fóliás technika a dimenzionált hajszínért.',
    price: '15.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
] as const

const testimonials = [
  {
    quote: 'Precíz munka, gyönyörű lett a balayage-om.',
    name: 'Anna K.',
    rating: 5,
  },
] as const

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
    alt: 'Frizura formázása hajszárítóval a szalonban',
    size: 'tall',
  },
  {
    url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=900&q=80',
    alt: 'Hajformázó eszközök közelről',
    size: 'normal',
  },
  {
    url: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?auto=format&fit=crop&w=900&q=80',
    alt: 'Hosszú, egészséges, ápolt haj',
    size: 'normal',
  },
  {
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
    alt: 'Természetes, dús hajkorona',
    size: 'normal',
  },
  {
    url: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern férfi hajvágás',
    size: 'wide',
  },
] as const

const heroImage = {
  url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=80',
  alt: 'Modern női frizura, gyönyörű haj',
}

const aboutImage1 = {
  url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
  alt: 'Fodrász munka közben, frizura formázása szárítóval',
}

const aboutImage2 = {
  url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  alt: 'Fodrász szalon eszközök',
}

async function createMediaFromUrl(
  payload: Awaited<ReturnType<typeof getPayload>>,
  url: string,
  alt: string,
) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Nem sikerült letölteni a képet: ${url} (${response.status})`)
  }
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const filename = `${url.split('/').pop()?.split('?')[0] || 'image'}.jpg`

  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    file: {
      data: buffer,
      mimetype: 'image/jpeg',
      name: filename,
      size: buffer.length,
    },
  })

  return doc
}

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
      addressNote: '(Pontos cím bejelentkezés alapján)',
      facebook: 'https://www.facebook.com/dorinafodraszmiskolc',
      instagram: 'https://www.instagram.com/tdorinaa',
      openingHours: [
        { day: 'Hétfő - Péntek', hours: 'Előzetes bejelentkezés alapján' },
        { day: 'Szombat', hours: 'Rugalmasan (alkalmi)' },
        { day: 'Vasárnap', hours: 'Zárva' },
      ],
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.2534578135896!2d20.7818!3d48.1035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409e6fcf2d9c0b%3A0x6ec0c5b550275815!2sMiskolc%2C%20Sz%C3%A9chenyi%20Istv%C3%A1n%20%C3%BAt!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu',
      seoTitle: 'Dorina Fodrász | Fodrászat Miskolc',
      seoDescription:
        'Dorina Fodrász Miskolcon — női és férfi hajvágás, festés, balayage, melír, styling. Stílus és gondoskodás minden vendégnek. Foglalj időpontot online!',
    },
  })

  console.log('Szolgáltatások (Services) feltöltése...')
  const existingServices = await payload.find({ collection: 'services', limit: 1 })
  if (existingServices.totalDocs === 0) {
    for (const service of services) {
      await payload.create({ collection: 'services', data: service })
    }
  } else {
    console.log('A szolgáltatások már léteznek, kihagyva.')
  }

  console.log('Vélemények (Testimonials) feltöltése...')
  const existingTestimonials = await payload.find({ collection: 'testimonials', limit: 1 })
  if (existingTestimonials.totalDocs === 0) {
    for (const testimonial of testimonials) {
      await payload.create({ collection: 'testimonials', data: testimonial })
    }
  } else {
    console.log('A vélemények már léteznek, kihagyva.')
  }

  console.log('Galéria (Gallery) feltöltése...')
  if (resetImages) {
    console.log('Meglévő galéria képek törlése...')
    const existingGallery = await payload.find({ collection: 'gallery', limit: 100 })
    for (const item of existingGallery.docs) {
      await payload.delete({ collection: 'gallery', id: item.id })
      const mediaId = typeof item.image === 'object' ? item.image?.id : item.image
      if (mediaId) {
        await payload.delete({ collection: 'media', id: mediaId }).catch(() => {})
      }
    }
  }

  const existingGallery = await payload.find({ collection: 'gallery', limit: 1 })
  if (existingGallery.totalDocs === 0) {
    for (const image of galleryImages) {
      try {
        const media = await createMediaFromUrl(payload, image.url, image.alt)
        await payload.create({
          collection: 'gallery',
          data: { image: media.id, alt: image.alt, size: image.size },
        })
      } catch (error) {
        console.error(`Hiba a galéria kép feltöltésekor (${image.url}):`, error)
      }
    }
  } else {
    console.log('A galéria már fel van töltve, kihagyva.')
  }

  console.log('Kezdőlap (Homepage) tartalom frissítése...')
  let homepage = await payload.findGlobal({ slug: 'homepage' })

  if (resetImages) {
    console.log('Meglévő kezdőlap képek törlése...')
    const resetData: Record<string, unknown> = {}
    for (const field of ['heroImage', 'aboutImage1', 'aboutImage2'] as const) {
      const current = homepage[field]
      const mediaId = typeof current === 'object' ? current?.id : current
      if (mediaId) {
        await payload.delete({ collection: 'media', id: mediaId }).catch(() => {})
        resetData[field] = null
      }
    }
    if (Object.keys(resetData).length > 0) {
      await payload.updateGlobal({ slug: 'homepage', data: resetData })
      homepage = await payload.findGlobal({ slug: 'homepage' })
    }
  }

  const homepageData: Record<string, unknown> = {}

  if (!homepage.heroImage) {
    try {
      const media = await createMediaFromUrl(payload, heroImage.url, heroImage.alt)
      homepageData.heroImage = media.id
    } catch (error) {
      console.error('Hiba a hero kép feltöltésekor:', error)
    }
  }

  if (!homepage.aboutImage1) {
    try {
      const media = await createMediaFromUrl(payload, aboutImage1.url, aboutImage1.alt)
      homepageData.aboutImage1 = media.id
    } catch (error) {
      console.error('Hiba a "rólunk" nagy kép feltöltésekor:', error)
    }
  }

  if (!homepage.aboutImage2) {
    try {
      const media = await createMediaFromUrl(payload, aboutImage2.url, aboutImage2.alt)
      homepageData.aboutImage2 = media.id
    } catch (error) {
      console.error('Hiba a "rólunk" kis kép feltöltésekor:', error)
    }
  }

  if (Object.keys(homepageData).length > 0) {
    await payload.updateGlobal({ slug: 'homepage', data: homepageData })
  }

  console.log('Kész!')
  process.exit(0)
}

await seed().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
