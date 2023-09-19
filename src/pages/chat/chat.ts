import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;

class ChatPage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
      onLogin: (event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();
        console.log({
          login,
          password,
        });
      },
      onCreateAccount: (event) => {
        event.preventDefault();
      },
   
    });
  }

  protected render(): string {
    return ` 
        {{#> Layout}}       
            <div class="chat-container">
                {{{ ChatMainSection }}}
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