import type { CollectionConfig } from 'payload'

export const Flashcards: CollectionConfig = {
  slug: 'flashcards',
  admin: {
    useAsTitle: 'front',
  },
  fields: [
    {
      name: 'front',
      type: 'text',
    },
    {
      name: 'back',
      type: 'text',
    },
    {
      name: 'rank',
      type: 'number',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
