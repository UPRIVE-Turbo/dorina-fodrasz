import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Vélemény',
    plural: 'Vélemények',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'name',
    defaultColumns: ['name', 'quote', 'rating'],
  },
  access: {
    read: () => true,
  },
  orderable: true,
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Vélemény szövege',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Vendég neve',
      admin: {
        description: 'Opcionális — pl. "Anna K."',
      },
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Értékelés (csillagok)',
      defaultValue: 5,
      min: 1,
      max: 5,
    },
  ],
}
