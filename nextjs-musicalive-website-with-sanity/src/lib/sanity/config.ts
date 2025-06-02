
// lib/sanity/config.ts
export const config = {
    projectId: 'xsj8ihg2',
    dataset: 'production',
    apiVersion: '2024-06-01',
    useCdn: false, // Important: false to enable draft content
    token: process.env.SANITY_API_READ_TOKEN, // Secure access for previews
}
