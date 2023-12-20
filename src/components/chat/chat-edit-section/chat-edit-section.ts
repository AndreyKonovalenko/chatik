import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';

type TChatMainSectionProps = {
  onSearch: (event: Event) => void;
};

export class ChatEditSection extends Block<TChatMainSectionProps> {
  constructor(props: TChatMainSectionProps) {
    super(props);
  }

  protected render(): string {
    return ` 
    <div class="chat-edit-section">
      <div class="chat-edit-section-controls-container">
        <div class="chat-edit-section-controls">
          {{{ Icon key="chat-edit-sections-controls-0" type="edit" size="36" color="${uiConstants.palette.LIGHT}" fill=0 }}}
          {{{ Icon key="chat-edit-sections-controls-1" type="archive" size="36" color="${uiConstants.palette.LIGHT}" fill=0 }}}
          {{{ Icon key="chat-edit-sections-controls-2" type="delete" size="36" color="${uiConstants.palette.LIGHT}" fill=0 }}}
          {{{ Icon key="chat-edit-sections-controls-3" type="save" size="36" color="${uiConstants.palette.LIGHT}" fill=0 }}}
        </div>
      </div>
  </div>
    `;
  }
}

// <div class="chat-edit-section">
// <div class="chat-edit-section-controls-container">
//   <div class="chat-edit-section-controls">
//     {{{ Icon key="chat-edit-sections-controls-0" type="edit" size="36" color=uiConstants.palette.LIGHT fill=0 }}}
//     {{{ components/icon/icon key="chat-edit-sections-controls-1" type="archive" size="36" color=uiConstants.palette.LIGHT fill=0 }}}
//     {{{ components/icon/icon key="chat-edit-sections-controls-2" type="delete" size="36" color=uiConstants.palette.LIGHT fill=0 }}}
//     {{{ components/icon/icon key="chat-edit-sections-controls-3" type="save" size="36" color=uiConstants.palette.LIGHT fill=0 }}}
//   </div>
//   <div class="chat-edit-section-edit-img">
//      <img src={{_mock_chats.[0].avatar}} alt="chat bage"/>
//       {{> components/button/button type='button' text='choose image'}}
//   </div>
//     <input
//       class="chat-edit-section-input"
//       type='text'
//       value='{{value}}'
//       placeholder='{{_mock_chats.[0].title}}'
//       size="20"
//     />
// </div>
// {{#> components/chat/chat-list/chat-list header=uiConstants.headers.USERS_LIST controls=true edit=true }}
//     {{#each _mock_users}}
//       {{> components/chat/user-card/user-card
//         avatar=this.avatar
//         first_name=this.first_name
//         last_name=this.second_name
//         colors=../uiConstants.palette
//         edit=true
//        }}
//    {{/each}}
//  {{/ components/chat/chat-list/chat-list}}
// </div>
