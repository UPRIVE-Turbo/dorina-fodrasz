import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Beállítások',
  admin: {
    group: 'Beállítások',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Cégnév',
      defaultValue: 'Dorina Fodrász',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefonszám',
      defaultValue: '+36 70 328 0824',
      admin: {
        description: 'Kattintható telefonszám a weboldalon (tel: link).',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Cím',
      defaultValue: 'Miskolc, Széchenyi István utca környéke',
    },
    {
      name: 'addressNote',
      type: 'text',
      label: 'Cím megjegyzés',
      defaultValue: '(Pontos cím bejelentkezés alapján)',
      admin: {
        description: 'A cím alatt megjelenő kiegészítő szöveg.',
      },
    },
    {
      name: 'openingHours',
      type: 'array',
      label: 'Nyitvatartás',
      fields: [
        {
          name: 'day',
          type: 'text',
          label: 'Nap',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Nyitvatartás',
        },
      ],
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      label: 'Google Maps embed link',
      admin: {
        description: 'A Google Maps "Embed a map" iframe src URL-je.',
      },
    },
    {
      type: 'collapsible',
      label: 'Közösségi médiák',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook link',
          defaultValue: 'https://www.facebook.com/dorinafodraszmiskolc',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram link',
          defaultValue: 'https://www.instagram.com/tdorinaa',
        },
        {
          name: 'tiktok',
          type: 'text',
          label: 'TikTok link',
          admin: {
            description: 'Opcionális — ha üres, a TikTok ikon nem jelenik meg.',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Keresőoptimalizálás (SEO)',
      fields: [
        {
          name: 'seoTitle',
          type: 'text',
          label: 'SEO cím',
          defaultValue: 'Dorina Fodrász | Fodrászat Miskolc',
          admin: {
            description: 'A böngésző fülön és a Google találatokban megjelenő cím.',
          },
        },
        {
          name: 'seoDescription',
          type: 'textarea',
          label: 'SEO leírás',
          defaultValue:
            'Dorina Fodrász Miskolcon — női és férfi hajvágás, festés, balayage, melír, styling. Stílus és gondoskodás minden vendégnek. Foglalj időpontot online!',
          admin: {
            description: 'A Google találatokban megjelenő rövid leírás.',
          },
        },
      ],
    },
  ],
}
