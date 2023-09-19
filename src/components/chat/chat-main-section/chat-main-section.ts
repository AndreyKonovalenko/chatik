import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;

export class ChatMainSection extends Block {
  constructor() {
    super({
      form_title: headers.LOGIN,
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
      inputs: [
        {
          name: 'login',
          placeholder: placeholders.LOGIN,
          icon: false,
          type: 'login',
        },
        {
          name: 'password',
          placeholder: placeholders.PASSWORD,
          icon: true,
          type: 'password',
        },
      ],
    });
  }

  protected render(): string {
    return ` 
        <div class="chat-main-section">
            {{{ SearchBar placeholder='${placeholders.SEARCH}' }}}
        <div>
        `;
  }
}













// <div class="chat-main-section">  
//     {{#> components/chat/chat-list/chat-list header=uiConstants.headers.CHAT_LIST controls=true }}
//       {{#each _mock_chats }}
//         {{> components/chat/chat-card/chat-card 
//           title=this.title 
//           avatar=this.avatar 
//           content=this.last_message.content 
//           time=this.last_message.time 
//           unread=this.unread_count 
//           selected=false
//           archived=false
//           colors=../uiConstants.palette
//         }}
//       {{/each}}
//     {{/ components/chat/chat-list/chat-list}}
// </div>