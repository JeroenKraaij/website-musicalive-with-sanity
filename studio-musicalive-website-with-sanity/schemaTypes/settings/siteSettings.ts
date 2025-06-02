
// sanity/schemas/settings/siteSettings.ts

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'navigation',
            title: 'Main Navigation',
            type: 'reference',
            to: [{ type: 'mainNavigation' }],
        },
    ],
}
