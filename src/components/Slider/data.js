const data = {
  properties: [
    {
      id: 0,
      name: 'Game',
      data: [
        {
          _id: 0,
          index: 0,
          picture: `images/codm.jpg`,
          name: 'Call Of Duty',
          value: 'Call Of Duty',
          next: 1,
          prev: -1,
        },
        {
          _id: 0,
          index: 1,
          picture: `images/apex.jpg`,
          name: 'Apex',
          value: 'Apex',
          next: 1,
          prev: -1,
        },
        {
          _id: 0,
          index: 2,
          picture: `images/fortnite.jpg`,
          name: 'Fortnite',
          value: 'Fortnite',
          next: 1,
          prev: -1,
        },
        {
          _id: 0,
          index: 3,
          picture: `images/warzone.jpg`,
          name: 'Warzone',
          value: 'Warzone',
          next: 1,
          prev: -1,
        },
        {
          _id: 0,
          index: 4,
          picture: `images/sims.jpg`,
          name: 'PUBG',
          value: 'PUBG',
          next: 1,
          prev: -1,
        },
        {
          _id: 0,
          index: 5,
          picture: `images/nba.jpg`,
          name: 'NBA',
          value: 'NBA',
          next: 1,
          prev: -1,
        },
      ],
    },

    {
      id: 1,
      name: 'Type',

      data: [
        {
          _id: 1,
          index: 0,
          picture: `images/soldier2.jpg`,
          name: 'Public',
          next: 2,
          prev: 0,
          value: 'PUBLIC',
        },
        {
          _id: 1,
          index: 1,
          picture: `images/soldier1.jpg`,
          name: 'Private',
          next: 2,
          prev: 0,
          value: 'PRIVATE',
        },
      ],
    },

    {
      id: 2,
      name: 'Mode',

      data: [
        {
          _id: 2,
          index: 0,
          picture: `images/gta.jpg`,
          name: 'Multiplayer',
          next: 3,
          value: 'MULTIPLAYER',
          prev: 1,
        },
        {
          _id: 2,
          index: 1,
          picture: `images/apex.jpg`,
          name: 'Battle Royale',
          next: 4,
          value: 'BATTLEROYALE',
          prev: 1,
        },
      ],
    },

    {
      id: 3,
      name: 'Shuffle',
      prev: 2,

      data: [
        {
          _id: 3,
          index: 0,
          picture: `images/nba.jpg`,
          name: 'Automatic',
          next: 4,
          value: 'AUTOMATIC',
          prev: 2,
        },
        {
          _id: 3,
          index: 1,
          picture: `images/gta.jpg`,
          name: 'Manual',
          next: 4,
          value: 'MANUAL',
          prev: 2,
        },
      ],
    },

    {
      id: 4,
      name: 'Team Size',

      data: [
        {
          _id: 4,
          index: 0,
          picture: `images/soldier4.png`,
          name: 'Single',
          value: 'SINGLE',
          next: 5,
          prev: 3,
        },
        {
          _id: 4,
          index: 1,
          picture: `images/soldier1.jpg`,
          name: 'Duo',
          value: 'DUO',
          next: 5,
          prev: 3,
        },
        {
          _id: 4,
          index: 2,
          picture: `images/nba.jpg`,
          name: 'Squad',
          value: 'SQUAD',
          next: 5,
          prev: 3,
        },
      ],
    },

    {
      id: 5,
      name: 'Payment',

      data: [
        {
          _id: 5,
          index: 0,
          picture: `images/soldier3.png`,
          name: 'Free',
          value: 'FREE',
          next: 100,
          prev: 4,
        },
        {
          _id: 5,
          index: 1,
          picture: `images/soldier2.jpg`,
          name: 'Paid',
          value: 'PAID',
          next: 100,
          prev: 4,
        },
        {
          _id: 5,
          index: 2,
          picture: `images/soldier1.jpg`,
          name: 'Sponsored',
          value: 'SPONSORED',
          next: 100,
          prev: 4,
        },
      ],
    },
  ],
}

export default data
