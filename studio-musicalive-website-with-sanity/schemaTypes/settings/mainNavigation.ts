
export default {
    name: 'mainNavigation',
    type: 'document',
    title: 'Main Navigation',
    fields: [
        {
            name: 'items',
            title: 'Navigation Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'navItem',
                    fields: [
                        {
                            name: 'title',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'page',
                            title: 'Linked Page',
                            type: 'reference',
                            to: [{ type: 'page' }],
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'hidden',
                            title: 'Hidden',
                            type: 'boolean',
                            initialValue: false,
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            hidden: 'hidden',
                            pageTitle: 'page.title',
                            slug: 'page.slug.current',
                        },
                        prepare({ title, hidden, pageTitle, slug }: any) {
                            return {
                                title: title || pageTitle || 'Untitled',
                                subtitle: hidden ? '🔒 Hidden' : slug || 'No slug',
                            }
                        },
                    },
                },
            ],
        },
    ],
}
