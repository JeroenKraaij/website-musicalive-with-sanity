// sanity/schemas/settings/logo.ts

export default {
    name: 'logo',
    title: 'Logo',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Logo Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
        },
    ],
}
