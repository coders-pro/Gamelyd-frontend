import girl from "../../assets/images/girl.png";

export type SelectedValues = {
  TournamentType: string;
  TournamentMode: string;
  Shuffle: string;
  Team: string;
  Payment: string;
  //   PaymentChannel: string;
  [key: string]: string;
};

export type DataItem = {
  name: string;
  selectedValue: number | null;
  image: string;
  data: { image: string; value: string }[];
  modelName: keyof SelectedValues;
};

export type selectDataType = {
  name: string;
  value: string;
};

export type PaystackButtonProps = {
  publicKey: string;
  email: string;
  amount: number;
  reference?: string; // Optional custom reference for the transaction
};

export const platformData: selectDataType[] = [
  { name: "Mobile", value: "Mobile" },
  { name: "Cross Plartform", value: "Cross Plartform" },
  { name: "Play Station", value: "Play Station" },
  { name: "X-box", value: "X-bos" },
  {
    name: "Physical Game (Field)",
    value: "Physical Game (Field)",
  },
];

export const paymentChannelData: selectDataType[] = [
  { name: "Paystack", value: "Paystack" },
  { name: "Flutterwave", value: "Flutterwave" },
];

export const myData = [
  {
    name: "Tournament Icon",
    selectedValue: null,
    image: girl,
    data: [
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone2.jpeg?updatedAt=1695930036202",
        value: "SHOOTER",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/fifa2.jpg?updatedAt=1695929789214",
        value: "FIFA",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/apex2.jpg?updatedAt=1695930037592",
        value: "APEX",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/codm.jpg?updatedAt=1695929782629",
        value: "CODM",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/pes2.jpg?updatedAt=1695929782272",
        value: "PES",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone.jpg?updatedAt=1695929792320",
        value: "WARZONE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/nba2.jpg?updatedAt=1695929781550",
        value: "NBA2K",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/pes.jpg?updatedAt=1695929781787",
        value: "PES",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/fortnite2.jpg?updatedAt=1695929784524",
        value: "FORTNITE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/nba.jpg?updatedAt=1695929781188",
        value: "NBA2K",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/fortnite.jpg?updatedAt=1695929784173",
        value: "FORTNITE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/codm2.jpg?updatedAt=1695929782613",
        value: "CODM",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/nba.jpg?updatedAt=1695929781188",
        value: "NBA2K",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/apex.jpg?updatedAt=1695929789889",
        value: "APEX",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/warzone.png?updatedAt=1695897395102",
        value: "WARZONE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/hacker.png?updatedAt=1695897392790",
        value: "HACKER",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/acane.png?updatedAt=1695897392507",
        value: "ARCANE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/codm.png?updatedAt=1695897346299",
        value: "CODM",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/girl.png?updatedAt=1695897324556",
        value: "GIRLY",
      },
      // { image: "", value: "HACKER" },
      // { image: "", value: "HACKER" },
      // { image: "", value: "HACKER" },
    ],
    modelName: "Icon",
  },
  {
    name: "Type",
    selectedValue: null,
    image: girl,
    data: [
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/girl.png?updatedAt=1695897324556",
        value: "PRIVATE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/acane.png?updatedAt=1695897392507",
        value: "PUBLIC",
      },
    ],
    modelName: "TournamentType",
  },

  {
    name: "Mode",
    selectedValue: null,
    image: girl,
    data: [
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/acane.png?updatedAt=1695897392507",
        value: "MULTIPLAYER",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/girl.png?updatedAt=1695897324556",
        value: "BATTLE ROYALE",
      },
    ],
    modelName: "TournamentMode",
  },
  {
    name: "Shuffle Type",
    selectedValue: null,
    image: girl,
    data: [
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/girl.png?updatedAt=1695897324556",
        value: "AUTOMATIC",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/acane.png?updatedAt=1695897392507",
        value: "MANUAL",
      },
    ],
    modelName: "Shuffle",
  },
  {
    name: "Team Size",
    selectedValue: null,
    image: girl,
    data: [
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/acane.png?updatedAt=1695897392507",
        value: "SINGLE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/girl.png?updatedAt=1695897324556",
        value: "DUO",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/hacker.png?updatedAt=1695897392790",
        value: "SQUAD",
      },
    ],
    modelName: "Team",
  },
  {
    name: "Payment",
    selectedValue: null,
    image: girl,
    data: [
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/girl.png?updatedAt=1695897324556",
        value: "FREE",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/hacker.png?updatedAt=1695897392790",
        value: "PAID",
      },
      {
        image:
          "https://ik.imagekit.io/dmkczkqll/Gamelyd/Tournaments/acane.png?updatedAt=1695897392507",
        value: "SPONSORED",
      },
    ],
    modelName: "Payment",
  },
];

// export const myData1 = [
//   {
//     name: "Type",
//     selectedValue: null,
//     image: girl,
//     data: ["PRIVATE", "PUBLIC"],
//     modelName: "TournamentType",
//   },

//   {
//     name: "Mode",
//     selectedValue: null,
//     image: girl,
//     data: ["MULTIPLAYER", "BATTLE ROYALE"],
//     modelName: "TournamentMode",
//   },
//   {
//     name: "Shuffle Type",
//     selectedValue: null,
//     image: girl,
//     data: ["AUTOMATIC", "MANUAL"],
//     modelName: "Shuffle",
//   },
//   {
//     name: "Team Size",
//     selectedValue: null,
//     image: girl,
//     data: ["SINGLE", "DUO", "SQUAD"],
//     modelName: "Team",
//   },
//   {
//     name: "Payment",
//     selectedValue: null,
//     image: girl,
//     data: ["FREE", "PAID", "SPONSORED"],
//     modelName: "Payment",
//   },
//   {
//     name: "Payment Channel",
//     selectedValue: null,
//     image: girl,
//     data: ["PAYSTACK", "FLUTTERWAVE"],
//     modelName: "PaymentChannel",
//   },
// ];
