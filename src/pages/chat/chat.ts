import Block from '../../core/Block';
import { chatsMock } from '../../mocks/chats-mock';
//import { messagesMock } from '../../mocks/messages-mock';
import store, { TChatState, TAppState } from '../../services/Store';
import { connect } from '../../services/connect';

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
  editMode: boolean;
  onChatSelectedHandler: (id: string | number) => void;
};

type TChatStateEditModeChunk = {
  editMode: boolean
}

class ChatPage extends Block<TChatProps> {
  constructor(props: TChatProps) {
    super(props);

    getChats();
    // getChat controller
   function  getChats() {
        const state = { ...store.getState() };
        store.set({
          ...state,
          chat: { ...state.chat, chats: chatsMock}
      })
  }
}
  // public setSelectedChatId(id: string | number) {
  //   console.log()
  //   // this.props.chatState = { ...this.props.chatState, selectedChatId: id };
  //   // this.props.chatState = {
  //   //   ...this.props.chatState,
  //   //   chat: chatsMock.find((element: TChat) => element.id === id),
  //   // };
  // }

  // // action GET CHATS
  // public getChats() {
  //   const state = { ...store.getState() };
  //   store.set({
  //     ...state,
  //     chat: { ...state.chat, chats: chatsMock}
  // })
// }

  // public getChatById(id: string | number) {}

  protected render(): string {
    const chatEditSection = `{{{ ChatEditSection }}}`;
    return ` 
        {{#> Layout}}       
            <div class="chat-container">
                {{{ ChatMainSection  }}}
                {{{ ChatMessageSection }}}
                ${this.props.editMode ? chatEditSection : null}
            </div> 
        {{/ Layout}}
        `;
  }
}

const mapStateToProps = (state: TAppState): TChatStateEditModeChunk => {
  return {
    editMode: state.chat.editMode
  }
}

export default connect(ChatPage, mapStateToProps);

// {{#> components/layout/layout}}
//     <div class="chat-container">
//         {{> components/chat/chat-main-section/chat-main-section}}
//         {{> components/chat/chat-message-section/chat-message-section}}
//          {{#if edit_mode}}
//             {{> components/chat/chat-edit-section/chat-edit-section}}
//         {{/if}}
//     </div>
// {{/ components/layout/layout}}
