import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;
import _mock_chats from '../../__mocks__/_mock_chats';

class ChatPage extends Block {
  selectedChat: any;
  constructor() {
    super({
      selectedChat: "чат не выбран", 
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
      onChatSelectHandler: () => {
        console.log("drilling")
      },
      onCreateAccount: (event) => {
        event.preventDefault();
      },
    });
  }
  setSelectedChat(data: any) {
    this.selectedChat = data;
  }

  protected render(): string {
    return ` 
        {{#> Layout}}       
            <div class="chat-container">
                {{{ ChatMainSection  onChatSelect=onChatSelectHandler }}}
                {{{ ChatMessageSection  }}}
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