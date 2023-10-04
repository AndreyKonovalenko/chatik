import { TMessage } from "../pages/chat/chat";

const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,';
const text2 = 'sed do eiusmod tempor';
const text3 = 'incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do';
const text4 = 'eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur';
const text5 = 'adipiscing elit, sed do eiusmod tempor incididunt ut labore';
const text = text1 + text2 + text3 + text4 + text5;

export const messagesMock: Array<TMessage> = [
  {
    chat_id: 1,
    time: '2023-01-02T14:22:22.000Z',
    type: 'text',
    user_id: '1',
    content: text,
  },
  {
    chat_id: 1,
    time: '2023-01-02T14:17:22.000Z',
    type: 'text',
    user_id: '2',
    content: text,
  },
  {
    chat_id: 1,
    time: '2023-01-02T14:17:22.000Z',
    type: 'text',
    user_id: '2',
    content: text,
  },
];

