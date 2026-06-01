/* //BomshellLuxeCleaning/src/data/servicesData.js */


import {
    Sparkles,
    Home,
    Building2,
    BriefcaseBusiness,
    BedDouble,
    ClipboardCheck
  } from 'lucide-react'

  export const services = [

    {
      id:'deep-cleaning',
      icon: Sparkles,
      title: 'Deep Cleaning',
      description:
        'Luxury-level detailed cleaning designed to completely refresh and elevate your space.'
    },

    {
      id:'move-in / move-out',
      icon: Home,
      title: 'Move-In / Move-Out',
      description:
        'Spotless transitions for homes, apartments, rentals, and real estate preparation.'
    },

    {
      id:'airbnb-turnovers',
      icon: BedDouble,
      title: 'Airbnb Turnovers',
      description:
        'Fast, reliable, guest-ready cleaning services tailored for short-term rental success.'
    },

    {
      id:'listing-preparation',
      icon: ClipboardCheck,
      title: 'Listing Preparation',
      description:
        'Presentation-focused cleaning designed to impress buyers, renters, and guests.'
    },

    {
      id:'recurring-services',
      icon: BriefcaseBusiness,
      title: 'Recurring Services',
      description:
        'Weekly, bi-weekly, and monthly luxury cleaning plans customized to your lifestyle.'
    },

    {
      id:'commercial-cleaning',
      icon: Building2,
      title: 'Commercial Cleaning',
      description:
        'Professional workspace cleaning with elevated attention to detail and presentation.'
    }

  ]