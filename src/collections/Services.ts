import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Szolgáltatás',
    plural: 'Szolgáltatások',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category'],
  },
  access: {
    read: () => true,
  },
  orderable: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Név',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Leírás',
    },
    {
      name: 'price',
      type: 'text',
      label: 'Ár',
      admin: {
        description: 'pl. "6.000 Ft-tól"',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Kategória',
      options: [
        { label: 'Hajvágás & Formázás', value: 'hajvagas' },
        { label: 'Színváltoztatás', value: 'szinvaltoztatas' },
      ],
      defaultValue: 'hajvagas',
      admin: {
        description: 'A szolgáltatás melyik oszlopban jelenjen meg az árlistában.',
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ikon',
      admin: {
        description: 'Opcionális ikon azonosító',
      },
    },
  ],
}
