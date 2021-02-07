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
    position: "Senior Accounting" /* string */,
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
        totalDislikes: ["naomi Carey"],
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
          totalDislikes: ["naomi Carey", "hello"],
          totalLikes: ["1", "naomi", "boss", "me"],
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
          totalDislikes: ["naomi Carey"],
          totalLikes: ["1",  "boss"],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Peppe" /* string */,
    password: "user" /* string */,
    name: "Anna Salo" /* string */,
    position: "FE Developer" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4(),
        title: "Coffee machine at office",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
          totalDislikes: ["Naomi Carey"],
          totalLikes: ["1"],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Bear" /* string */,
    password: "user" /* string */,
    name: "John Kennen" /* string */,
    position: "Mechanic Lead" /* string */,
    ideas: [
      /* put array of ideas here */
      {
        id: uuidv4() /* uuidv */,
        title: "Morning stand ups. I REALLY HATE THEM",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
          totalDislikes: ["No Carey"],
          totalLikes: ["1", "naomi", "boss"],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Bonito" /* string */,
    password: "user" /* string */,
    name: "Gary from 2nd Floor" /* string */,
    position: "IDEAs giver" /* string */,
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
          totalDislikes: ["Naomi Carey"],
          totalLikes: ["1", "hello", "boss"],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Mary" /* string */,
    password: "user" /* string */,
    name: "Karen Poppins" /* string */,
    position: "Head of Accounting" /* string */,
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
          totalDislikes: ["Naomi Carey"],
          totalLikes: ["1", "naomi", "boss"],
        created: "22/01/2021",
      },
    ],
  },
  {
    id: uuidv4() /* uuidv */,
    username: "Silvester" /* string */,
    password: "user" /* string */,
    name: "Orlando Green" /* string */,
    position: "Product Manager" /* string */,
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
          totalDislikes: ["naomi Carey"],
          totalLikes: ["1", "naomi", "boss"],
        created: "22/01/2021",
      },
      {
        id: uuidv4() /* uuidv */,
        title: "Need new Manager",
        question1:
          "is simply dummy text of the printing and typesetting industry. ",
        question2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        question3:
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ",
          totalDislikes: ["naomi Carey"],
          totalLikes: ["1", "naomi", "boss"],
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
          totalDislikes: ["Naomi Carey"],
          totalLikes: ["1", "naomi", "boss"],
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
          totalDislikes: ["narey"],
          totalLikes: ["Naomi Carey", "1", "naomi", "boss"],
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
      totalDislikes: ["naomi Carey"],
      totalLikes: ["Naomi Carey", "1", "naomi", "boss"],
    created: "22/01/2021",
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
      totalDislikes: ["naomi Carey"],
      totalLikes: ["1", "naomi", "boss"],
    created: "22/01/2021",
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
      totalLikes: ["Naomi Carey", "1", "naomi", "boss"],
    created: "22/01/2021",
    name: "V",
  },
];
