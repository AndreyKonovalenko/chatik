import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { palette } = uiConstants;

export class ChatMessageSection extends Block {
  constructor() {
    super();
  }

  protected render(): string {
    const { chatState } = this.props;
    const chatHeaderSection = `
      <img src="${chatState.chat && chatState.chat.avatar}" alt="chat bage"/>
      <p>${chatState.chat && chatState.chat.title}</p>
    `;
    return ` 
        <div class="chat-message-section">
            <div class="chat-message-section-header">
                <div class="chat-message-section-bage-container">  
                    ${chatState.chat !== null ? chatHeaderSection : ''}
                </div> 
                <div class="chat-message-section-controls">
                    {{{ Icon key="chat-message-sectio-icon-0" type="add_circle" size="42" color='${
                      palette.ON_PRIMARY
                    }' fill=0}}}
                    {{{ Icon key="chat-message-sectio-icon-1" type="settings" size="42" color='${
                      palette.DARK
                    }' fill=0}}}
                </div> 
            </div>
            {{{ ChatField chatState=chatState }}}
            {{{ SendMessageBar }}}
        </div>
        `;
  }
}
