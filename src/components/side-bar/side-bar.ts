import Block from "../../core/Block";
import uiConstants from "../../utils/ui-constants";
const {palette} = uiConstants;

export class SideBar extends Block {
    protected render(): string {
        return (`
        <div class='side-bar-container'>
        <a href="/">
          <div class='logo-container'>
              <p>C</p>
          </div>
        </a>
        <div class='nav-bar-container'>
          <div class='nav-bar-menu-container'>
            <a href='/profile'>{{{ Icon key="side-bar-0" type="person" size="46" color="${palette.ON_PRIMARY}" fill=0  dist='profile' }}}</a>
            <a href='/chat'>{{{ Icon key="side-bar-1" type="forum" size="46" color="${palette.ON_PRIMARY}" fill=0  dist='chat'}}}</a>
            <a href='/archive'>{{{ Icon key="side-bar-2" type="archive" size="46" color="${palette.ON_PRIMARY}" fill=0 dist='archive' }}}</a>
          </div>
          {{{ Icon key="side-bar-3" type="logout" size="46" color="${palette.ON_PRIMARY}" fill=0 dist='logout' }}}
        </div>
      </div> `);
    }
}

export default SideBar;


