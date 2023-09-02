import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Satoru",
    lastName: "Gojo",
    email: "SatoruGojo@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Wayanad, Kerala",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Son",
    lastName: "Goku",
    email: "SonGoku@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpg",
    friends: [],
    location: "Kochi, Kerala",
    occupation: "Data Analyst",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "D",
    lastName: "Luffy",
    email: "DLuffy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Thiruvananthapuram, Kerala",
    occupation: "Data Scientist",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Asta",
    lastName: "BlackClover",
    email: "AstaBlackClover@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.jpg",
    friends: [],
    location: "Calicut, Kerla",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Yuno",
    lastName: "Grinberryall",
    email: "YunoGrinberryall@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Kasaragod, Kerala",
    occupation: "App Developer",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Satoru",
    lastName: "Gojo",
    location: "Wayanad, Kerala",
    description: "A place in Wayanad, Kerala",
    picturePath: "post1.jpg",
    userPicturePath: "p1.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Great Photo",
      "The place is good",
      "Wow, the cloud",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Son",
    lastName: "Goku",
    location: "Kochi, Kerala",
    description:
      "The word ‘Kerala’ means ‘land of coconuts’",
    picturePath: "post2.jpg",
    userPicturePath: "p2.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Knowledgeable",
      "Good Post",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "D",
    lastName: "Luffy",
    location: "Thiruvananthapuram, Kerala",
    description:
      "Fun Fact: Kerala receives India’s first rainfall. Kerala gets the first spell of rains in India. While the rest of the nation experiences rain in July, Kerala witnesses it around the first week of June every year followed by Mumbai and Delhi.",
    picturePath: "post3.jpg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[0], true],
      [userIds[3], true],
      [userIds[2], true],
    ]),
    comments: [
      "Good Post",
      "Nice Fact",
      "WOW",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Asta",
    lastName: "BlackClover",
    location: "Calicut, Kerla",
    description:
      "India’s Highest Literacy Rate Is In Kerala The remarkable literacy rate of Kerala is one of the most admirable aspects of the state and something of which every Indian should be proud. Almost 93% of Kerala’s population is literate.",
    picturePath: "post4.jpg",
    userPicturePath: "p4.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
      "Good Fact",
      "Great Post",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Yuno",
    lastName: "Grinberryall",
    location: "Kasaragod, Kerala",
    description:
      "Kerala is known as the “Spice Garden of India”. The state produces a variety of spices like cardamom, pepper, cinnamon, cloves, and turmeric. These spices are used not only in Indian cuisine but also in cuisines around the world. ",
    picturePath: "post5.jpg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[0], true],
      [userIds[4], true],
    ]),
    comments: [
      "Good FACT",
    ],
  },
];
