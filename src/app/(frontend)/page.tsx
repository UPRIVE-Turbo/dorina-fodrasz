import Image from 'next/image'
import { getPayload } from 'payload'
import {
  ArrowUp,
  ChatCircleText,
  Clock,
  FacebookLogo,
  HandPointing,
  Heart,
  InstagramLogo,
  Phone,
  Star,
  TiktokLogo,
} from '@phosphor-icons/react/dist/ssr'

import config from '@/payload.config'
import type { Media } from '@/payload-types'
import Reveal from './components/Reveal'
import SiteHeader from './components/SiteHeader'
import BookingForm from './components/BookingForm'

const fallbackServices = [
  {
    id: 'noi-hajvagas',
    name: 'Női hajvágás',
    description: 'Rövid, félhosszú vagy hosszú haj precíz vágása, formázással.',
    price: '6.000 Ft-tól',
    category: 'hajvagas',
  },
  {
    id: 'ferfi-hajvagas',
    name: 'Férfi hajvágás',
    description: 'Klasszikus és modern átmenetes vágások.',
    price: '4.500 Ft-tól',
    category: 'hajvagas',
  },
  {
    id: 'styling',
    name: 'Styling / Beszárítás',
    description: 'Alkalmi vagy mindennapi volumennövelő beszárítás, hullámosítás.',
    price: '4.000 Ft-tól',
    category: 'hajvagas',
  },
  {
    id: 'tofestes',
    name: 'Tőfestés',
    description: 'Lenövés eltüntetése, ősz haj fedése kíméletes anyagokkal.',
    price: '8.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
  {
    id: 'teljes-festes',
    name: 'Teljes festés',
    description: 'Egyenletes, ragyogó tónus a haj teljes hosszán.',
    price: '12.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
  {
    id: 'balayage',
    name: 'Balayage / Ombre',
    description:
      'Természetes, napcsókolta hatás vagy kontrasztos átmenetek (tartalmazza az árnyalást).',
    price: '22.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
  {
    id: 'melir',
    name: 'Klasszikus Melír',
    description: 'Fóliás technika a dimenzionált hajszínért.',
    price: '15.000 Ft-tól',
    category: 'szinvaltoztatas',
  },
]

const fallbackGallery = [
  {
    id: 'gallery-1',
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    alt: 'Frizura formázása hajszárítóval a szalonban',
    size: 'tall' as const,
  },
  {
    id: 'gallery-2',
    src: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80',
    alt: 'Hajformázó eszközök közelről',
    size: 'normal' as const,
    delay: 100 as const,
  },
  {
    id: 'gallery-3',
    src: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?auto=format&fit=crop&w=600&q=80',
    alt: 'Hosszú, egészséges, ápolt haj',
    size: 'normal' as const,
    delay: 200 as const,
  },
  {
    id: 'gallery-4',
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    alt: 'Természetes, dús hajkorona',
    size: 'normal' as const,
  },
  {
    id: 'gallery-5',
    src: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern férfi hajvágás',
    size: 'wide' as const,
    delay: 100 as const,
  },
]

const galleryClassNames: Record<string, string> = {
  normal: 'aspect-square',
  tall: 'col-span-2 md:col-span-1 md:row-span-2 aspect-square md:aspect-auto',
  wide: 'col-span-2 aspect-[2/1] md:aspect-auto md:h-full',
}

const galleryDelays: Array<100 | 200 | undefined> = [undefined, 100, 200, undefined, 100]

const bookingIcons = {
  clock: Clock,
  chat: ChatCircleText,
  star: Star,
  heart: Heart,
} as const

function mediaUrl(media: number | Media | null | undefined, fallback: string): string {
  if (media && typeof media === 'object' && media.url) {
    return media.url
  }
  return fallback
}

export const revalidate = 60

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const settings = await payload.findGlobal({ slug: 'settings' }).catch(() => null)
  const homepage = await payload.findGlobal({ slug: 'homepage' }).catch(() => null)
  const servicesResult = await payload
    .find({ collection: 'services', limit: 50, sort: '_order' })
    .catch(() => null)
  const galleryResult = await payload
    .find({ collection: 'gallery', limit: 20, sort: '_order' })
    .catch(() => null)
  const testimonialsResult = await payload
    .find({ collection: 'testimonials', limit: 1, sort: '_order' })
    .catch(() => null)

  const services = servicesResult?.docs?.length ? servicesResult.docs : fallbackServices

  const phone = settings?.phone || '+36 70 328 0824'
  const phoneHref = `tel:${phone.replace(/\s+/g, '')}`
  const facebook = settings?.facebook || 'https://www.facebook.com/dorinafodraszmiskolc'
  const instagram = settings?.instagram || 'https://www.instagram.com/tdorinaa'
  const tiktok = settings?.tiktok
  const address = settings?.address || 'Miskolc, Széchenyi István utca környéke'
  const addressNote = settings?.addressNote || '(Pontos cím bejelentkezés alapján)'
  const mapEmbedUrl =
    settings?.mapEmbedUrl ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.2534578135896!2d20.7818!3d48.1035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409e6fcf2d9c0b%3A0x6ec0c5b550275815!2sMiskolc%2C%20Sz%C3%A9chenyi%20Istv%C3%A1n%20%C3%BAt!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu'
  const openingHours = settings?.openingHours?.length
    ? settings.openingHours
    : [
        { day: 'Hétfő - Péntek', hours: 'Előzetes bejelentkezés alapján' },
        { day: 'Szombat', hours: 'Rugalmasan (alkalmi)' },
        { day: 'Vasárnap', hours: 'Zárva' },
      ]

  const hajvagasServices = services.filter((s) => s.category === 'hajvagas' || !s.category)
  const szinServices = services.filter((s) => s.category === 'szinvaltoztatas')

  const gallery = galleryResult?.docs?.length
    ? galleryResult.docs.map((doc) => ({
        id: String(doc.id),
        src: mediaUrl(doc.image, fallbackGallery[0].src),
        alt: doc.alt,
        size: doc.size || 'normal',
      }))
    : fallbackGallery

  const testimonial = testimonialsResult?.docs?.[0] || {
    quote: 'Precíz munka, gyönyörű lett a balayage-om.',
    name: null,
    rating: 5,
  }

  // Hero
  const heroBadge = homepage?.heroBadge || 'Miskolc, Széchenyi u. környéke'
  const heroTitleLine1 = homepage?.heroTitleLine1 || 'Stílus és'
  const heroTitleHighlight = homepage?.heroTitleHighlight || 'gondoskodás'
  const heroTitleLine3 = homepage?.heroTitleLine3 || 'minden vendégnek.'
  const heroSubtitle =
    homepage?.heroSubtitle ||
    'Személyre szabott hajvágás, precíz festési technikák és professzionális styling. Mert a tökéletes frizura nem csak külső, hanem érzés.'
  const heroCtaLabel = homepage?.heroCtaLabel || 'Időpontfoglalás'
  const heroPhoneLabel = homepage?.heroPhoneLabel || 'Hívj minket'
  const heroImageUrl = mediaUrl(
    homepage?.heroImage,
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80',
  )
  const heroImageAlt = homepage?.heroImageAlt || 'Modern női frizura, gyönyörű haj'

  // About
  const aboutTitle = homepage?.aboutTitle || 'A szenvedélyem a hivatásom.'
  const aboutSubtitle = homepage?.aboutSubtitle || 'Szia, Dorina vagyok.'
  const aboutParagraphs = homepage?.aboutParagraphs?.length
    ? homepage.aboutParagraphs
    : [
        {
          text: 'Évek óta dolgozom a szépségiparban, és számomra a fodrászat sosem csak hajvágásról szólt. Arról szól, hogy amikor belenézel a tükörbe, ne csak a frizurádat lásd, hanem azt az önbizalommal teli nőt vagy férfit, aki valójában vagy.',
        },
        {
          text: 'Folyamatosan képzem magam a legújabb technikákban, legyen szó egy természetes hatású balayage-ról, egy extrém átváltozásról, vagy egy klasszikus, precíz férfi hajvágásról. A munkám során prémium anyagokkal dolgozom, hogy a hajad ne csak szép, de egészséges is maradjon.',
        },
      ]
  const aboutQuote = homepage?.aboutQuote || 'Az egészséges haj a legszebb kiegészítőd.'
  const aboutImage1Url = mediaUrl(
    homepage?.aboutImage1,
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
  )
  const aboutImage1Alt = homepage?.aboutImage1Alt || 'Fodrász munka közben, frizura formázása szárítóval'
  const aboutImage2Url = mediaUrl(
    homepage?.aboutImage2,
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
  )
  const aboutImage2Alt = homepage?.aboutImage2Alt || 'Fodrász szalon eszközök'

  // Services section
  const servicesEyebrow = homepage?.servicesEyebrow || 'Mit nyújtok?'
  const servicesTitle = homepage?.servicesTitle || 'Szolgáltatások & Árak'
  const servicesDescription =
    homepage?.servicesDescription ||
    'Minden szolgáltatás tartalmazza a konzultációt, hajmosást és a befejező formázást. Az árak a haj hosszától és sűrűségétől függően változhatnak.'
  const servicesColumn1Title = homepage?.servicesColumn1Title || 'Hajvágás & Formázás'
  const servicesColumn2Title = homepage?.servicesColumn2Title || 'Színváltoztatás'

  // Gallery section
  const galleryTitle = homepage?.galleryTitle || 'Munkáim'
  const galleryDescription =
    homepage?.galleryDescription ||
    'Néhány pillanatkép a szalonból. Még több előtte-utána fotóért kövess Instagramon.'
  const galleryCtaText = homepage?.galleryCtaText || 'Kövess @tdorinaa néven'

  // Booking section
  const bookingTitleLine1 = homepage?.bookingTitleLine1 || 'Jelentkezz be'
  const bookingTitleHighlight = homepage?.bookingTitleHighlight || 'online'
  const bookingDescription =
    homepage?.bookingDescription ||
    'Felejtsd el a hosszadalmas Messenger üzenetváltásokat. Töltsd ki az űrlapot, és hamarosan felhívlak, hogy fixáljuk a pontos időpontot.'
  const bookingFeatures = homepage?.bookingFeatures?.length
    ? homepage.bookingFeatures
    : [
        {
          icon: 'clock' as const,
          title: 'Rugalmas Időpontok',
          description: 'Próbálok alkalmazkodni az időbeosztásodhoz.',
        },
        {
          icon: 'chat' as const,
          title: 'Ingyenes Konzultáció',
          description: 'Minden nagyobb átalakítás előtt megbeszéljük, mi állna a legjobban.',
        },
      ]

  // Contact section
  const contactTitle = homepage?.contactTitle || 'Látogass el hozzám.'

  // Footer
  const footerTagline = homepage?.footerTagline || 'Miskolc — Széchenyi u. környéke'
  const footerCopyright = homepage?.footerCopyright || '© 2026 Dorina Fodrász. Minden jog fenntartva.'
  const footerDisclaimer = homepage?.footerDisclaimer || 'Az árak tájékoztató jellegűek.'

  return (
    <>
      <SiteHeader facebook={facebook} instagram={instagram} />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10 pt-12 lg:pt-0">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-rose-400" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400">
                  {heroBadge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight text-purple-900 mb-8 text-balance">
                {heroTitleLine1}
                <br />
                <span className="italic text-rose-400">{heroTitleHighlight}</span>
                <br />
                {heroTitleLine3}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-ink/70 max-w-lg mb-10 font-light leading-relaxed">
                {heroSubtitle}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#foglalas"
                  className="inline-flex justify-center items-center px-8 py-4 bg-purple-900 text-white text-sm font-medium tracking-wide hover:bg-ink transition-colors duration-300"
                >
                  {heroCtaLabel}
                </a>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full border border-rose-400/30 flex items-center justify-center text-rose-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-ink/50 uppercase tracking-wider mb-0.5">
                      {heroPhoneLabel}
                    </p>
                    <a href={phoneHref} className="font-medium text-ink hover:text-purple-900 transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute -top-8 -right-8 w-full h-[110%] bg-rose-400/10 z-0 hidden md:block" />

            <div className="relative z-10 w-full aspect-[3/4] img-hover-container img-offset-right shadow-2xl">
              <Image
                src={heroImageUrl}
                alt={heroImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale-[20%]"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 md:-left-12 glass-panel p-6 z-20 w-48 animate-float">
              <div className="flex gap-2 text-rose-400 mb-2">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" />
                ))}
              </div>
              <p className="text-xs font-medium text-ink leading-tight">
                &quot;{testimonial.quote}&quot;
              </p>
              {testimonial.name && (
                <p className="text-[0.65rem] text-ink/50 mt-2 uppercase tracking-wider">
                  {testimonial.name}
                </p>
              )}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 hidden md:flex">
          <span className="text-[0.65rem] uppercase tracking-widest text-ink">Görgetés</span>
          <div className="w-px h-12 bg-ink/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-900 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="rolunk" className="py-24 md:py-40 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal className="relative order-2 lg:order-1">
              <div className="w-4/5 aspect-[4/5] img-hover-container relative">
                <Image
                  src={aboutImage1Url}
                  alt={aboutImage1Alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover grayscale-[10%]"
                />
              </div>
              <div className="absolute bottom-12 right-0 w-2/5 aspect-square img-hover-container border-4 border-white shadow-xl">
                <Image
                  src={aboutImage2Url}
                  alt={aboutImage2Alt}
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-6">{aboutTitle}</h2>
              <h3 className="text-xl text-rose-400 font-serif italic mb-8">{aboutSubtitle}</h3>

              <div className="space-y-6 text-ink/70 font-light leading-relaxed">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={paragraph.id || index}>{paragraph.text}</p>
                ))}
              </div>

              <div className="mt-10 border-l-2 border-rose-400 pl-6 py-2">
                <p className="text-2xl font-serif text-purple-900 italic">&quot;{aboutQuote}&quot;</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="szolgaltatasok" className="py-24 md:py-40 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03] select-none text-purple-900 font-serif text-[15vw] whitespace-nowrap">
          Szolgáltatások
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="text-rose-400 font-semibold tracking-[0.2em] uppercase text-xs block mb-4">
                {servicesEyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-purple-900 mb-4">{servicesTitle}</h2>
              <p className="text-ink/60 font-light">{servicesDescription}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal delay={100}>
              <h3 className="text-2xl font-serif text-purple-900 border-b border-rose-400/30 pb-4 mb-8">
                {servicesColumn1Title}
              </h3>
              <div className="space-y-6">
                {hajvagasServices.map((service) => (
                  <div key={service.id} className="group">
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <h4 className="text-lg font-medium text-ink group-hover:text-purple-900 transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex-grow border-b border-dotted border-ink/20 relative top-[-6px]" />
                      <span className="font-serif text-xl text-purple-900 whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    {service.description && (
                      <p className="text-sm text-ink/50 font-light pr-16">{service.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="text-2xl font-serif text-purple-900 border-b border-rose-400/30 pb-4 mb-8">
                {servicesColumn2Title}
              </h3>
              <div className="space-y-6">
                {szinServices.map((service) => (
                  <div key={service.id} className="group">
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <h4 className="text-lg font-medium text-ink group-hover:text-purple-900 transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex-grow border-b border-dotted border-ink/20 relative top-[-6px]" />
                      <span className="font-serif text-xl text-purple-900 whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    {service.description && (
                      <p className="text-sm text-ink/50 font-light pr-16">{service.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-purple-900 mb-4">{galleryTitle}</h2>
            <p className="text-ink/60 font-light max-w-xl mx-auto">{galleryDescription}</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((img, index) => (
              <Reveal
                key={img.id}
                delay={galleryDelays[index % galleryDelays.length]}
                className={`img-hover-container relative bg-stone-100 ${galleryClassNames[img.size] || galleryClassNames.normal}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-12 text-center">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-900 border-b border-purple-900 pb-1 hover:text-rose-400 hover:border-rose-400 transition-colors"
            >
              <InstagramLogo size={22} />
              <span className="font-medium">{galleryCtaText}</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Booking Form */}
      <section id="foglalas" className="py-24 md:py-40 bg-purple-900 relative text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-400 opacity-20 blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                {bookingTitleLine1} <br />
                <span className="text-rose-400 italic">{bookingTitleHighlight}</span>
              </h2>
              <p className="text-stone-100/70 font-light text-lg mb-8">{bookingDescription}</p>

              <div className="space-y-6">
                {bookingFeatures.map((feature, index) => {
                  const Icon = bookingIcons[feature.icon || 'clock'] || Clock
                  return (
                    <div key={feature.id || index} className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2 rounded-full text-rose-400">
                        <Icon size={20} weight="fill" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">{feature.title}</h4>
                        {feature.description && (
                          <p className="text-sm text-stone-100/50">{feature.description}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-7">
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="kapcsolat" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            <Reveal className="lg:pr-16 flex flex-col justify-center">
              <h2 className="text-4xl font-serif text-purple-900 mb-10">{contactTitle}</h2>

              <div className="space-y-8">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-rose-400 block mb-2">
                    Cím
                  </span>
                  <p className="text-xl font-serif text-ink">
                    {address}
                    {addressNote && (
                      <span className="text-lg font-sans font-light mt-1 block">{addressNote}</span>
                    )}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-rose-400 block mb-2">
                    Kapcsolat
                  </span>
                  <a
                    href={phoneHref}
                    className="text-2xl font-serif text-purple-900 hover:text-rose-400 transition-colors inline-block"
                  >
                    {phone}
                  </a>
                  <div className="flex gap-4 mt-3">
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-ink/10 flex items-center justify-center text-ink hover:bg-purple-900 hover:text-white hover:border-purple-900 transition-all"
                    >
                      <FacebookLogo size={18} weight="fill" />
                    </a>
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-ink/10 flex items-center justify-center text-ink hover:bg-purple-900 hover:text-white hover:border-purple-900 transition-all"
                    >
                      <InstagramLogo size={18} weight="fill" />
                    </a>
                    {tiktok && (
                      <a
                        href={tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-ink/10 flex items-center justify-center text-ink hover:bg-purple-900 hover:text-white hover:border-purple-900 transition-all"
                      >
                        <TiktokLogo size={18} weight="fill" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-rose-400 block mb-2">
                    Nyitvatartás
                  </span>
                  <ul className="text-ink/70 font-light space-y-1">
                    {openingHours.map((row, index) => (
                      <li key={row.id || index} className="flex justify-between max-w-xs gap-4">
                        <span>{row.day}:</span> <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="h-96 lg:h-[600px] w-full bg-stone-100 overflow-hidden relative group">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dorina Fodrász térkép"
                className="map-filter grayscale"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-ink flex items-center gap-2 pointer-events-none opacity-100 transition-opacity group-hover:opacity-0 shadow-sm">
                <HandPointing size={16} /> Interaktív térkép
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-stone-100 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl text-white mb-1">Dorina Fodrász</p>
            <p className="text-stone-100/40 text-sm font-light">{footerTagline}</p>
          </div>

          <div className="text-stone-100/40 text-xs font-light text-center">
            {footerCopyright}
            <br />
            <span className="opacity-50 mt-1 block">{footerDisclaimer}</span>
          </div>

          <a
            href="#navbar"
            className="w-12 h-12 bg-white/5 hover:bg-rose-400 hover:text-white transition-colors flex items-center justify-center text-xl text-stone-100/50"
            aria-label="Vissza a tetejére"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </footer>
    </>
  )
}
