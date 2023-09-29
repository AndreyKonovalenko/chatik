import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants';
import { TIcon } from '../icon/icon';
const { palette } = uiConstants;


export class SideBar extends Block<TIcon> {
  protected render(): string {
    return `
        <div class='side-bar-container'>   
          <div class='logo-container' page="login">
              <p page="login">C</p>
          </div>      
        <div class='nav-bar-container'>
          <div class='nav-bar-menu-container'>
            {{{ Icon key="side-bar-0" type="person" size="46" color="${palette.ON_PRIMARY}" fill=0  dist='profile' page="profile" }}}
            {{{ Icon key="side-bar-1" type="forum" size="46" color="${palette.ON_PRIMARY}" fill=0  dist='chat' page='chat' }}}
            {{{ Icon key="side-bar-2" type="archive" size="46" color="${palette.ON_PRIMARY}" fill=0 dist='archive' page='archive' }}}
          </div>
          {{{ Icon key="side-bar-3" type="logout" size="46" color="${palette.ON_PRIMARY}" fill=0 dist='logout' }}}
        </div>
      </div> `;
  }
}
