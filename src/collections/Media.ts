import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'centre',
        withoutEnlargement: false,
      },
      {
        name: 'banner',
        width: 1024,
        height: 640,
        position: 'centre',
        withoutEnlargement: false,
      },
    ],
    adminThumbnail: 'thumbnail',
  },
}
