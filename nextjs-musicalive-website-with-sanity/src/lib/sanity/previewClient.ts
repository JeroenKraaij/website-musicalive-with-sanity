
// lib/sanity/previewClient.ts
import { createClient } from 'next-sanity'
import { config } from './config'

// This client fetches *drafts* by disabling `useCdn`
export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN, // ⬅️ secure token from Sanity
})
