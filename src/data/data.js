const { v4: uuidv4 } = require("uuid");

export const managers = [
  {
    name: "Jacopo Luri",
    favourite: [
      /* put favourite comments here */
    ],
  },
];

export const user = [
  {
    id: uuidv4() /* uuidv */,
    username: "user" /* string */,
    password: "user" /* string */,
    name: "Naomi Carey" /* string */,
    position: "worker" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "Fresh pizza at work",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: ["1", "naomi", "boss"],
        created: "22/01/2021",
      },
      {
        id: uuidv4() /* uuidv */,
        title: "No more long meetings",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: ["1", "naomi", "boss", "myself"],
        created: "22/01/2021",
      },
      {
        id: uuidv4() /* uuidv */,
        title: "Please let me work more",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Peppe" /* string */,
    password: "user" /* string */,
    name: "Anna Salo" /* string */,
    position: "developer" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4(),
        title: "Cofee machine at office",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [
          {
            id: uuidv4() /* uuidv */,
            username: "Pizza" /* string */,
            password: "user" /* string */,
            name: "Naomi Carey" /* string */,
            position: "" /* string */,
          },
          {
            id: uuidv4() /* uuidv */,
            username: "Silvester" /* string */,
            password: "user" /* string */,
            name: "Silvester Stallone" /* string */,
            position: "writer",
          },
          {
            id: uuidv4() /* uuidv */,
            username: "Bonito" /* string */,
            password: "user" /* string */,
            name: "Chowauwa" /* string */,
            position: "cooker",
          },
        ],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Bear" /* string */,
    password: "user" /* string */,
    name: "Yahoo Karlos" /* string */,
    position: "cleaner" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "Morning stand ups",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: ["noone"],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Bonito" /* string */,
    password: "user" /* string */,
    name: "Chowauwa" /* string */,
    position: "cooker" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "Expand sickleave",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [
          /* likes other users gave. i want an array of name of users liking the comment  */
        ],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Mary" /* string */,
    password: "user" /* string */,
    name: "Marry Poppins" /* string */,
    position: "model" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "More breaks",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [
          /* likes other users gave. i want an array of name of users liking the comment  */
        ],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Silvester" /* string */,
    password: "user" /* string */,
    name: "Silvester Stallone" /* string */,
    position: "writer" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "Need new Manager",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [
          /* likes other users gave. i want an array of name of users liking the comment  */
        ],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Pizza" /* string */,
    password: "user" /* string */,
    name: "Naomi Carey" /* string */,
    position: "" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "Better time management",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [
          {
            id: uuidv4() /* uuidv */,
            username: "Pizza" /* string */,
            password: "user" /* string */,
            name: "Naomi Carey" /* string */,
            position: "" /* string */,
          },
          {
            id: uuidv4() /* uuidv */,
            username: "Silvester" /* string */,
            password: "user" /* string */,
            name: "Silvester Stallone" /* string */,
            position: "writer",
          },
          {
            id: uuidv4() /* uuidv */,
            username: "Bonito" /* string */,
            password: "user" /* string */,
            name: "Chowauwa" /* string */,
            position: "cooker",
          },
        ],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Bob" /* string */,
    password: "user" /* string */,
    name: "Zheniya Habrykava" /* string */,
    position: "" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "More workers for writer department",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
        totalDislikes: [],
        totalLikes: [
          {
            id: uuidv4() /* uuidv */,
            username: "Pizza" /* string */,
            password: "user" /* string */,
            name: "Naomi Carey" /* string */,
            position: "" /* string */,
          },
          {
            id: uuidv4() /* uuidv */,
            username: "Silvester" /* string */,
            password: "user" /* string */,
            name: "Silvester Stallone" /* string */,
            position: "writer",
          },
        ],
        created: "22/01/2021",
      },
    ],
  },
];

export const bestIdeas = [
  {
    id: uuidv4() /* uuidv */,
    title: "Everyday pizza at work",
    question1:
      "is simply dummy text of the printing and typesetting industry. ",
    question2:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    question3:
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
    totalDislikes: [],
    totalLikes: ["lorem", "ipsum", "hello"],
    created: "01/01/2021",
    name: "Naomi Carey",
  },
  {
    id: uuidv4() /* uuidv */,
    title: "New laptops for everyone!",
    question1:
      "is simply dummy text of the printing and typesetting industry. ",
    question2:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    question3:
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
    totalDislikes: [],
    totalLikes: ["ipsum", "hello"],
    created: "15/01/2021",
    name: "Jane Doe",
  },
  {
    id: uuidv4() /* uuidv */,
    title: "Remote working up to 60%",
    question1:
      "is simply dummy text of the printing and typesetting industry. ",
    question2:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    question3:
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
    totalDislikes: [],
    totalLikes: ["ipsum", "hello"],
    created: "29/01/2021",
    name: "V",
  },
];
