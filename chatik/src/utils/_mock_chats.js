const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore";

const _mock_chats = [
  {
    id: 1,
    title: "Technology",
    avatar: "/src/utils/technology.png",
    unread_count: 23,
    last_message: {
      user: {
        first_name: "Andrey",
        second_name: "Konovalenko",
        avatar: "/src/utils/avatar.png",
        login: "konovalenko.a",
      },
      time: "2023-01-02T14:22:22.000Z",
      content: text,
    },
  },
  {
    id: 2,
    title: "Time and space",
    avatar: "/src/utils/time.png",
    unread_count: 15,
    last_message: {
      user: {
        first_name: "Andrey",
        second_name: "Konovalenko",
        avatar: "/src/utils/avatar.png",
        login: "konovalenko.a",
      },
      time: "2023-01-02T14:17:22.000Z",
      content: text,
    },
  },
  {
    id: 3,
    title: "Time and space",
    avatar: "/src/utils/time.png",
    unread_count: 15,
    last_message: {
      user: {
        first_name: "Andrey",
        second_name: "Konovalenko",
        avatar: "/src/utils/avatar.png",
        login: "konovalenko.a",
      },
      time: "2023-08-22T10:17:22.000Z",
      content: text,
    },
  },
  {
    id: 4,
    title: "Time and space",
    avatar: "/src/utils/time.png",
    unread_count: 15,
    last_message: {
      user: {
        first_name: "Andrey",
        second_name: "Konovalenko",
        avatar: "/src/utils/avatar.png",
        login: "konovalenko.a",
      },
      time: "2023-08-23T18:17:22.000Z",
      content: text,
    },
  },
];

export default _mock_chats;
