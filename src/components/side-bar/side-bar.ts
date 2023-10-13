import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants';
import { TIcon } from '../icon/icon';
import Router from '../../core/Router';
const { palette } = uiConstants;

type TSideBar = TIcon & {
  toProfile: void;
}

export class SideBar extends Block<TIcon> {
  constructor(props: TSideBar) {
    super({
      ...props,
      toLogin: (event: Event) => {
        event.preventDefault();
        Router.go('/')
      },
      toProfile: (event: Event) => {
        event.preventDefault();
        Router.go('/profile')
      },
      toChat: (event: Event) => {
        event.preventDefault();
        Router.go('/chat')
      },
    });
  }

  protected render(): string {
    return `
      <div class='side-bar-container'>   
        {{{ Logo onClick=toLogin }}}
        <div class='nav-bar-container'>
          <div class='nav-bar-menu-container'>
            {{{ Icon key="side-bar-0" type="person" size="46" color="${palette.ON_PRIMARY}" fill=0  dist='profile' onClick=toProfile }}}
            {{{ Icon key="side-bar-1" type="forum" size="46" color="${palette.ON_PRIMARY}" fill=0  dist='chat' onClick=toChat }}}
            {{{ Icon key="side-bar-2" type="archive" size="46" color="${palette.ON_PRIMARY}" fill=0 dist='archive' page='archive' }}}
          </div>
          {{{ Icon key="side-bar-3" type="logout" size="46" color="${palette.ON_PRIMARY}" fill=0 dist='logout' }}}
        </div>
      </div> `;
  }
}
