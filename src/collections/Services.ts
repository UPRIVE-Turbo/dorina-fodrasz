import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
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
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ikon',
      admin: {
        description: 'Opcionális ikon azonosító',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sorrend',
      defaultValue: 0,
    },
  ],
}
