import Block from '../../core/Block';
//@ts-ignore
import _mock_chats from '../../__mocks__/_mock_chats';

type TUser = {
  first_name: string;
  second_name: string;
  avatar: string;
  login: string;
};

type TLast_message = {
  user: TUser;
  time: Date;
  content: string;
};

type TChat = {
  id: number | string;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: TLast_message;
};

type TChatProps = {
  chatState: {
    selectedChatId: null | string | number;
    chat: null | TChat;
  };
  onChatSelectedHandler: (id: string | number) => void;
};

class ChatPage extends Block {
  constructor(props: TChatProps) {
    super({
      ...props,
      chatState: { selectedChatId: null, chat: null },
      onChatSelectHandler: (id: string | number) => {
        this.setSelectedChatId(id);
      },
    });
  }
  public setSelectedChatId(id: string | number) {
    this.props.chatState = { ...this.props.chatState, selectedChatId: id };
    this.props.chatState = {
      ...this.props.chatState,
      chat: _mock_chats.find((element: TChat) => element.id === id),
    };
  }

  public getChatById(id: string | number) {}

  protected render(): string {
    return ` 
        {{#> Layout}}       
            <div class="chat-container">
                {{{ ChatMainSection  onChatSelect=onChatSelectHandler chatState=chatState }}}
                {{{ ChatMessageSection chatState=chatState }}}
            </div> 
        {{/ Layout}}
        `;
  }
}

export default ChatPage;

// {{#> components/layout/layout}}
//     <div class="chat-container">
//         {{> components/chat/chat-main-section/chat-main-section}}
//         {{> components/chat/chat-message-section/chat-message-section}}
//          {{#if edit_mode}}
//             {{> components/chat/chat-edit-section/chat-edit-section}}
//         {{/if}}
//     </div>
// {{/ components/layout/layout}}
