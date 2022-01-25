const data = {
  properties: [
    {
      id: 0,
      name: 'Game',
      data: [
        {
          _id: '1',
          index: 0,
          picture: `images/codm.jpg`,
          name: 'Call Of Duty',
          value: 'Call Of Duty',
          next: 1,
        },
        {
          _id: '2',
          index: 1,
          picture: `images/apex.jpg`,
          name: 'Apex',
          value: 'Apex',
          next: 1,
        },
        {
          _id: '3',
          index: 2,
          picture: `images/fortnite.jpg`,
          name: 'Fortnite',
          value: 'Fortnite',
          next: 1,
        },
        {
          _id: '4',
          index: 3,
          picture: `images/warzone.jpg`,
          name: 'Warzone',
          value: 'Warzone',
          next: 1,
        },
        {
          _id: '5',
          index: 4,
          picture: `images/sims.jpg`,
          name: 'PUBG',
          value: 'PUBG',
          next: 1,
        },
        {
          _id: '6',
          index: 5,
          picture: `images/nba.jpg`,
          name: 'NBA',
          value: 'NBA',
          next: 1,
        },
      ],
    },

    {
      id: 1,
      name: 'Type',

      data: [
        {
          _id: '1',
          index: 0,
          picture: `images/soldier2.jpg`,
          name: 'Public',
          next: 2,
          value: 'PUBLIC',
        },
        {
          _id: '2',
          index: 1,
          picture: `images/soldier1.jpg`,
          name: 'Private',
          next: 2,
          value: 'PRIVATE',
        },
      ],
    },

    {
      id: 2,
      name: 'Mode',

      data: [
        {
          _id: '1',
          index: 0,
          picture: `images/gta.jpg`,
          name: 'Multiplayer',
          next: 3,
          value: 'MULTIPLAYER',
        },
        {
          _id: '2',
          index: 1,
          picture: `images/apex.jpg`,
          name: 'Battle Royale',
          next: 4,
          value: 'BATTLEROYALE',
        },
      ],
    },

    {
      id: 3,
      name: 'Shuffle',

      data: [
        {
          _id: '1',
          index: 0,
          picture: `images/nba.jpg`,
          name: 'Automatic',
          next: 4,
          value: 'AUTOMATIC',
        },
        {
          _id: '2',
          index: 1,
          picture: `images/gta.jpg`,
          name: 'Manual',
          next: 4,
          value: 'MANUAL',
        },
      ],
    },

    {
      id: 4,
      name: 'Team Size',

      data: [
        {
          _id: '1',
          index: 0,
          picture: `images/soldier4.png`,
          name: 'Single',
          value: 'SINGLE',
          next: 5,
        },
        {
          _id: '2',
          index: 1,
          picture: `images/soldier1.jpg`,
          name: 'Duo',
          value: 'DUO',
          next: 5,
        },
        {
          _id: '3',
          index: 2,
          picture: `images/nba.jpg`,
          name: 'Squad',
          value: 'SQUAD',
          next: 5,
        },
      ],
    },

    {
      id: 5,
      name: 'Payment',

      data: [
        {
          _id: '1',
          index: 0,
          picture: `images/soldier3.png`,
          name: 'Free',
          value: 'FREE',
          next: 100,
        },
        {
          _id: '2',
          index: 1,
          picture: `images/soldier2.jpg`,
          name: 'Paid',
          value: 'PAID',
          next: 100,
        },
        {
          _id: '3',
          index: 2,
          picture: `images/soldier1.jpg`,
          name: 'Sponsored',
          value: 'SPONSORED',
          next: 100,
        },
      ],
    },
  ],
}

export default data
