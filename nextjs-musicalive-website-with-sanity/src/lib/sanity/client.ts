// lib/sanity/client.ts
import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)
