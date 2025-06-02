
// sanity/schemas/settings/mainNavigation.ts

export default {
    name: 'mainNavigation',
    title: 'Main Navigation',
    type: 'document',
    fields: [
        {
            name: 'items',
            title: 'Menu Items',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'page' }],
                },
            ],
        },
    ],
}
