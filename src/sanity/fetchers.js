/* //BomshellLuxeCleaning/src/sanity/fetchers.js */

import { client } from '../sanityClient'
import * as queries from './queries'

export const getHero = () =>
  client.fetch(queries.heroQuery)

export const getServices = () =>
  client.fetch(queries.servicesQuery)

export const getPromotions = () =>
  client.fetch(queries.promotionsQuery)

export const getTestimonials = () =>
  client.fetch(queries.testimonialsQuery)

export const getTransformations = () =>
  client.fetch(queries.transformationsQuery)

export const getContact = () =>
  client.fetch(queries.contactQuery)

export const getSiteSettings = () =>
  client.fetch(queries.siteSettingsQuery)