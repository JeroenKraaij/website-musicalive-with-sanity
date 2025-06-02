import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import deskStructure from './.sanity/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Musicalive-website-with-sanity',

  projectId: 'xsj8ihg2',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => deskStructure(S),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})