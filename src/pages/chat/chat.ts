import Block from '../../core/Block';
import { chatsMock } from '../../mocks/chats-mock';
import { messagesMock } from '../../mocks/messages-mock';
import store, { StoreEvents, TChatState } from '../../services/Store';
import { getChatState } from '../../services/stateSelectors';

export type TMessage = {
  chat_id: number;
  time: string;
  type: string;
  user_id: string;
  content: string;
};

export type TUser = {
  id: string;
  first_name: string;
  second_name: string;
  display_name?: string;
  email?: string;
  phone?: string;
  avatar: string;
  login: string;
};

type TLast_message = {
  user: TUser;
  time: string;
  content: string;
};

export type TChat = {
  id: number | string;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: TLast_message;
};

export type TChatProps = TChatState & {
  chatState: {
    selectedChatId: null | string | number;
    chat: TChat | undefined;
    messages: Array<TMessage>;
    currentUserId: string;
  };
  onChatSelectedHandler: (id: string | number) => void;
};

class ChatPage extends Block<TChatProps> {
  constructor(props: TChatProps) {
    super({
      ...props,
      chatState: {
        selectedChatId: null,
        chat: null,
        messages: messagesMock,
        currentUserId: '1',
      },
      editMode: false,
      onChatSelectHandler: (id: string | number) => {
        this.setSelectedChatId(id);
      },
    });
    store.on(StoreEvents.Updated, () => {
      const { editMode } = getChatState();
      this.props.editMode = editMode;
    });
  }
  public setSelectedChatId(id: string | number) {
    this.props.chatState = { ...this.props.chatState, selectedChatId: id };
    this.props.chatState = {
      ...this.props.chatState,
      chat: chatsMock.find((element: TChat) => element.id === id),
    };
  }

  // public getChatById(id: string | number) {}

  protected render(): string {
    const chatEditSection = `{{{ ChatEditSection }}}`;
    return ` 
        {{#> Layout}}       
            <div class="chat-container">
                {{{ ChatMainSection  onChatSelect=onChatSelectHandler chatState=chatState }}}
                {{{ ChatMessageSection chatState=chatState chatState=chatState editMode=editMode }}}
                ${this.props.editMode ? chatEditSection : null}
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
