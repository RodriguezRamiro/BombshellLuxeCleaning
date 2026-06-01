/* //BomshellLuxeCleaning/src/data/transformationsData.js */

import before1 from '../assets/before1.jpeg'
import after1 from '../assets/after1.jpeg'

import before2 from '../assets/before2.jpeg'
import after2 from '../assets/after2.jpeg'

import before3 from '../assets/before3.jpg'
import after3 from '../assets/after3.jpg'

export const transformations = [

  {
    id:'kitchen-refresh',
    title:'Kitchen Refresh',
    before:{
        image:before1,
        alt:'Kitchen before refresh',
    },

    after:{
        image:after1,
        alt:'Kitchen after refresh',
  },
},

  {
    id:'living-room-detail',
    title:"Livingroom Detailing",
    before:{
        image:before2,
        alt: 'Livingroom before detailing'
    },

    after:{
        image:after2,
        alt:'Livingroom after detailing'
  },
},

  {
    id:'bathroom-restoration',
    title:'Bathroom Restoration',
    before:{
        image:before3,
        alt:'Bathroom before cleaning'
      },

      after:{
        image:after3,
        alt:'Bathroom after cleaning'
      }
  }

]