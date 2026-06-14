import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
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
  ],
}
