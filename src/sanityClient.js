/* //BomshellLuxeCleaning/src/sanityClient.js */

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '682n0mw5',
  dataset: 'production',
  apiVersion: '2026-06-05',
  useCdn: true,
})