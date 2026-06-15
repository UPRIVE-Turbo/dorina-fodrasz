import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Galéria kép',
    plural: 'Galéria',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'alt',
    defaultColumns: ['image', 'alt', 'size'],
  },
  access: {
    read: () => true,
  },
  orderable: true,
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Kép',
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt szöveg',
      admin: {
        description: 'Rövid leírás a képről (akadálymentesség és SEO miatt).',
      },
    },
    {
      name: 'size',
      type: 'select',
      label: 'Méret a rácsban',
      defaultValue: 'normal',
      options: [
        { label: 'Normál (1x1)', value: 'normal' },
        { label: 'Magas (1x2)', value: 'tall' },
        { label: 'Széles (2x1)', value: 'wide' },
      ],
      admin: {
        description: 'A galéria rácsban elfoglalt hely mérete.',
      },
    },
  ],
}
