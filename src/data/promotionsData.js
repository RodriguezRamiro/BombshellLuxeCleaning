/* /BomshellLuxeCleaning/src/data/promotionsData.js */

import promo1 from '../assets/promo1.jpg'
import promo2 from '../assets/promo2.jpg'
import promo3 from '../assets/promo3.jpg'

export const promotions = [

  {
    id:'summer-cleaning-special',

    image:{
      src:promo1,
      alt:'Summer cleaning special promotion'
    },

    title:'Summer Cleaning Special',

    description:
      'Book now and receive 15% OFF luxury cleaning services for a limited time.'
  },

  {
    id:'move-in-refresh',

    image:{
      src:promo2,
      alt:'Move-in and move-out cleaning promotion'
    },

    title:'Move-In / Move-Out Refresh',

    description:
      'Detailed transformation cleanings designed for seamless home transitions.'
  },

  {
    id:'airbnb-turnover-excellence',

    image:{
      src:promo3,
      alt:'Airbnb turnover cleaning promotion'
    },

    title:'Airbnb Turnover Excellence',

    description:
      'Fast, elegant, guest-ready cleaning experiences for short-term rentals.'
  }

]