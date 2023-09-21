import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { headers, placeholders, palette,  buttons, errors } = uiConstants;
import _mock_chats from '../../../__mocks__/_mock_chats'

export class ChatList extends Block {
  constructor(props: any) {
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
      onChatSelect: props.onChatSelect,
      onHover: (event) => {
        event.preventDefault();
      },
      onCreateAccount: (event) => {
        event.preventDefault();
      },
      chats: _mock_chats
      , ...props
    });
  }

  protected render(): string {
    console.log(typeof this.props.onChatSelect);
    return ` 
        <div class="chat-list-container">
            <div class="chat-list-header">
                <p>${headers.CHAT_LIST}</p>
                <div class="chat-list-controls">
                  {{#if ${ this.props.controls && 'controls'} }}
                    {{{ Icon key="chat-list-settings-0" type="add_circle" size="36" color='${palette.LIGHT}' fill=0 }}}
                  {{/if}}
                  {{#if ${ this.props.edit && 'edit'} }}
                    {{{ Icon key="chat-list-settings-1" type="edit" size="36" color='${palette.LIGHT}' fill=0 }}}
                  {{/if}}
                </div>
            </div>
            <div class="chat-list">
                <ul>
                    {{#each chats}}
                        {{{ ChatCard
                            id=this.id   
                            title=this.title 
                            avatar=this.avatar 
                            content=this.last_message.content 
                            time=this.last_message.time 
                            unread=this.unread_count 
                            selected=false
                            archived=false
                            onChatSelect=onChatSelect
                        }}}
                    {{/each}}
                </ul>
            </div>
        </div>
        `;
  }
}



// {{> components/chat/chat-card/chat-card 
// title=this.title 
// avatar=this.avatar 
// content=this.last_message.content 
// time=this.last_message.time 
// unread=this.unread_count 
// selected=false
// archived=false
// colors=../uiConstants.palette
// }}

// {{#each _mock_chats }}
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


