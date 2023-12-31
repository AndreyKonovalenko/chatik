import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { headers, palette } = uiConstants;
import { TChat } from '../../../pages/chat/chat.ts';
import { connect } from '../../../core/connect.ts';
import { TAppState } from '../../../core/Store.ts';

type TChatList = {
  chats: Array<TChat> | null;
  controls: boolean;
  edit: boolean;
};

type TChatsStateChunk = {
  chats: Array<TChat> | null;
};

class ChatList extends Block<TChatList> {
  constructor(props: TChatList) {
    super(props);
  }

  protected render(): string {
    return ` 
        <div class="chat-list-container">
            <div class="chat-list-header">
                <p>${headers.CHAT_LIST}</p>
                <div class="chat-list-controls">
                  {{#if ${this.props.controls && 'controls'} }}
                    {{{ Icon key="chat-list-settings-0" type="add_circle" size="36" color='${
                      palette.LIGHT
                    }' fill=0 }}}
                  {{/if}}
                  {{#if ${this.props.edit && 'edit'} }}
                    {{{ Icon key="chat-list-settings-1" type="edit" size="36" color='${
                      palette.LIGHT
                    }' fill=0 }}}
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
                            onChatSelect=@root.onChatSelect
                            chatState=@root.chatState
                        }}}
                    {{/each}}
                </ul>
            </div>
        </div>
        `;
  }
}

const mapStateToProps = (state: TAppState): TChatsStateChunk => {
  return {
    chats: state.chat.chats,
  };
};

export default connect(ChatList, mapStateToProps);
