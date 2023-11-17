import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { palette } = uiConstants;
import { TChat } from '../../../pages/chat/chat.ts';
import store, {StoreEvents} from '../../../services/Store.ts';
import { getChatState, getChatEditModeState } from '../../../services/stateSelectors.ts';

type TChatMessageSection = {
  onEditChat: void
  editMode: boolean;
  selectedChat: TChat | undefined;
};

export class ChatMessageSection extends Block<TChatMessageSection> {
  constructor(props: TChatMessageSection) {
    super({
      ...props,
      onEditChat: () => {
        const state = { ...store.getState() };
        store.set({
          ...state,
          chat: { ...state.chat, editMode: !state.chat.editMode },
        });
      },
      selectedChat: undefined,
      editMode: getChatEditModeState()
    });

    
    store.on(StoreEvents.Updated, () => {
      this.props.editMode = getChatEditModeState();
  
    
    });

  }
  public setSelectedChat() {
    const {chats, selectedChatId} = getChatState();
    if( chats !== null && chats !== undefined) {
      return chats?.find((element)=> element.id === selectedChatId)
    }
    return undefined
  }


  protected render(): string {
    const {selectedChat, editMode} = this.props;
    console.log(selectedChat)
    const chatHeaderSection = `
      <img src="${selectedChat?.avatar}" alt="chat bage"/>
      <p>${selectedChat?.title}</p>
    `;

    return ` 
        <div class="chat-message-section">
            <div class="chat-message-section-header">
                <div class="chat-message-section-bage-container">  
                    ${selectedChat ? chatHeaderSection : ''}
                </div> 
                <div class="chat-message-section-controls">
                    {{{ Icon key="chat-message-sectio-icon-0" type="add_circle" size="42" color='${
                      palette.ON_PRIMARY
                    }' fill=0}}}
                    {{{ Icon key="chat-message-sectio-icon-1" type="settings" size="42" color='${
                      editMode ? palette.DARK : palette.ON_PRIMARY
                    }' onClick=onEditChat oncfill=0}}}
                </div> 
            </div>
            {{{ SendMessageBar }}}
        </div>
        `;
  }
}
