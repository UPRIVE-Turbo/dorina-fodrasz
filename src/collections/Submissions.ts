import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'service', 'preferredTime', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Név',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefonszám',
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Kívánt szolgáltatás',
      options: [
        { label: 'Női hajvágás', value: 'noi-hajvagas' },
        { label: 'Férfi hajvágás', value: 'ferfi-hajvagas' },
        { label: 'Tőfestés', value: 'tofestes' },
        { label: 'Teljes hajfestés', value: 'teljes-festes' },
        { label: 'Balayage / Ombre', value: 'balayage' },
        { label: 'Melír', value: 'melir' },
        { label: 'Styling / Alkalmi frizura', value: 'styling' },
      ],
    },
    {
      name: 'preferredTime',
      type: 'text',
      label: 'Kívánt időpont',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Megjegyzés',
    },
  ],
}
