import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Kezdőlap',
  admin: {
    group: 'Tartalom',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Hero szekció',
      fields: [
        {
          name: 'heroBadge',
          type: 'text',
          label: 'Felirat a cím felett',
          defaultValue: 'Miskolc, Széchenyi u. környéke',
        },
        {
          name: 'heroTitleLine1',
          type: 'text',
          label: 'Cím — 1. sor',
          defaultValue: 'Stílus és',
        },
        {
          name: 'heroTitleHighlight',
          type: 'text',
          label: 'Cím — kiemelt szó',
          defaultValue: 'gondoskodás',
          admin: {
            description: 'Ez a szó dőlt, rozé színnel jelenik meg.',
          },
        },
        {
          name: 'heroTitleLine3',
          type: 'text',
          label: 'Cím — 3. sor',
          defaultValue: 'minden vendégnek.',
        },
        {
          name: 'heroSubtitle',
          type: 'textarea',
          label: 'Alcím / leírás',
          defaultValue:
            'Személyre szabott hajvágás, precíz festési technikák és professzionális styling. Mert a tökéletes frizura nem csak külső, hanem érzés.',
        },
        {
          name: 'heroCtaLabel',
          type: 'text',
          label: 'CTA gomb szövege',
          defaultValue: 'Időpontfoglalás',
        },
        {
          name: 'heroPhoneLabel',
          type: 'text',
          label: 'Telefon felirat',
          defaultValue: 'Hívj minket',
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero kép',
        },
        {
          name: 'heroImageAlt',
          type: 'text',
          label: 'Hero kép alt szövege',
          defaultValue: 'Modern női frizura, gyönyörű haj',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Rólunk szekció',
      fields: [
        {
          name: 'aboutTitle',
          type: 'text',
          label: 'Cím',
          defaultValue: 'A szenvedélyem a hivatásom.',
        },
        {
          name: 'aboutSubtitle',
          type: 'text',
          label: 'Alcím',
          defaultValue: 'Szia, Dorina vagyok.',
        },
        {
          name: 'aboutParagraphs',
          type: 'array',
          label: 'Bemutatkozó szöveg bekezdései',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Bekezdés',
              required: true,
            },
          ],
          defaultValue: [
            {
              text: 'Évek óta dolgozom a szépségiparban, és számomra a fodrászat sosem csak hajvágásról szólt. Arról szól, hogy amikor belenézel a tükörbe, ne csak a frizurádat lásd, hanem azt az önbizalommal teli nőt vagy férfit, aki valójában vagy.',
            },
            {
              text: 'Folyamatosan képzem magam a legújabb technikákban, legyen szó egy természetes hatású balayage-ról, egy extrém átváltozásról, vagy egy klasszikus, precíz férfi hajvágásról. A munkám során prémium anyagokkal dolgozom, hogy a hajad ne csak szép, de egészséges is maradjon.',
            },
          ],
        },
        {
          name: 'aboutQuote',
          type: 'text',
          label: 'Kiemelt idézet',
          defaultValue: 'Az egészséges haj a legszebb kiegészítőd.',
        },
        {
          name: 'aboutImage1',
          type: 'upload',
          relationTo: 'media',
          label: 'Nagy kép',
        },
        {
          name: 'aboutImage1Alt',
          type: 'text',
          label: 'Nagy kép alt szövege',
          defaultValue: 'Fodrász munka közben, frizura formázása szárítóval',
        },
        {
          name: 'aboutImage2',
          type: 'upload',
          relationTo: 'media',
          label: 'Kis kép',
        },
        {
          name: 'aboutImage2Alt',
          type: 'text',
          label: 'Kis kép alt szövege',
          defaultValue: 'Fodrász szalon eszközök',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Szolgáltatások szekció',
      fields: [
        {
          name: 'servicesEyebrow',
          type: 'text',
          label: 'Felirat a cím felett',
          defaultValue: 'Mit nyújtok?',
        },
        {
          name: 'servicesTitle',
          type: 'text',
          label: 'Cím',
          defaultValue: 'Szolgáltatások & Árak',
        },
        {
          name: 'servicesDescription',
          type: 'textarea',
          label: 'Leírás',
          defaultValue:
            'Minden szolgáltatás tartalmazza a konzultációt, hajmosást és a befejező formázást. Az árak a haj hosszától és sűrűségétől függően változhatnak.',
        },
        {
          name: 'servicesColumn1Title',
          type: 'text',
          label: '1. oszlop címe',
          defaultValue: 'Hajvágás & Formázás',
        },
        {
          name: 'servicesColumn2Title',
          type: 'text',
          label: '2. oszlop címe',
          defaultValue: 'Színváltoztatás',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Galéria szekció',
      fields: [
        {
          name: 'galleryTitle',
          type: 'text',
          label: 'Cím',
          defaultValue: 'Munkáim',
        },
        {
          name: 'galleryDescription',
          type: 'textarea',
          label: 'Leírás',
          defaultValue:
            'Néhány pillanatkép a szalonból. Még több előtte-utána fotóért kövess Instagramon.',
        },
        {
          name: 'galleryCtaText',
          type: 'text',
          label: 'Instagram link szövege',
          defaultValue: 'Kövess @tdorinaa néven',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Időpontfoglalás szekció',
      fields: [
        {
          name: 'bookingTitleLine1',
          type: 'text',
          label: 'Cím — 1. sor',
          defaultValue: 'Jelentkezz be',
        },
        {
          name: 'bookingTitleHighlight',
          type: 'text',
          label: 'Cím — kiemelt szó',
          defaultValue: 'online',
        },
        {
          name: 'bookingDescription',
          type: 'textarea',
          label: 'Leírás',
          defaultValue:
            'Felejtsd el a hosszadalmas Messenger üzenetváltásokat. Töltsd ki az űrlapot, és hamarosan felhívlak, hogy fixáljuk a pontos időpontot.',
        },
        {
          name: 'bookingFeatures',
          type: 'array',
          label: 'Kiemelt információk',
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Ikon',
              defaultValue: 'clock',
              options: [
                { label: 'Óra', value: 'clock' },
                { label: 'Chat', value: 'chat' },
                { label: 'Csillag', value: 'star' },
                { label: 'Szív', value: 'heart' },
              ],
            },
            {
              name: 'title',
              type: 'text',
              label: 'Cím',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Leírás',
            },
          ],
          defaultValue: [
            {
              icon: 'clock',
              title: 'Rugalmas Időpontok',
              description: 'Próbálok alkalmazkodni az időbeosztásodhoz.',
            },
            {
              icon: 'chat',
              title: 'Ingyenes Konzultáció',
              description: 'Minden nagyobb átalakítás előtt megbeszéljük, mi állna a legjobban.',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Kapcsolat szekció',
      fields: [
        {
          name: 'contactTitle',
          type: 'text',
          label: 'Cím',
          defaultValue: 'Látogass el hozzám.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Lábláb',
      fields: [
        {
          name: 'footerTagline',
          type: 'text',
          label: 'Cégnév alatti felirat',
          defaultValue: 'Miskolc — Széchenyi u. környéke',
        },
        {
          name: 'footerCopyright',
          type: 'text',
          label: 'Copyright szöveg',
          defaultValue: '© 2026 Dorina Fodrász. Minden jog fenntartva.',
        },
        {
          name: 'footerDisclaimer',
          type: 'text',
          label: 'Kiegészítő megjegyzés',
          defaultValue: 'Az árak tájékoztató jellegűek.',
        },
      ],
    },
  ],
}
