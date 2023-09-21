import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { headers, placeholders, palette } = uiConstants;

export class ChatMessageSection extends Block {
  constructor(props:any) {
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
      },...props
    })
  }

  protected render(): string {
    return ` 
        <div class="chat-message-section">
            <div class="chat-message-section-header">
                <div class="chat-message-section-bage-container">  
                    <img src={} alt="chat bage"/>
                    <p>{}</p>
                </div>
                <div class="chat-message-section-controls">
                    {{{ Icon key="chat-message-sectio-icon-0" type="add_circle" size="42" color='${palette.ON_PRIMARY}' fill=0}}}
                    {{{ Icon key="chat-message-sectio-icon-1" type="settings" size="42" color='${palette.DARK}' fill=0}}}
                </div>
            </div>
        </div>
        `;
  }
}



// <div class="chat-message-section">
//   <div class="chat-message-section-header">
//     <div class="chat-message-section-bage-container">  
//       <img src={{_mock_chats.[0].avatar}} alt="chat bage"/>
//       <p>{{_mock_chats.[0].title}}</p>
//     </div>
//     <div class="chat-message-section-controls">
//       {{> components/icon/icon key="chat-message-sectio-icon-0" type="add_circle" size="42" color=uiConstants.palette.ON_PRIMARY fill=0}}
//       {{> components/icon/icon key="chat-message-sectio-icon-1" type="settings" size="42" color=uiConstants.palette.DARK fill=0}}
//     </div>
//   </div>
//   {{> components/chat/chat-field/chat-field}}
//   {{> components/chat/send-message-bar/send-message-bar}}
// </div>
