import Block from "../../core/Block";
import uiConstants from "../../utils/ui-constants";
const {palette} = uiConstants;

export class Input extends Block {
    protected render(): string {
        return (`
        <div class='input-wrapper'>
        <input
          class='input'
          type='{{type}}'
          value='{{value}}'
          name="{{name}}"
          placeholder='{{placeholder}}'
        />
        {{#if icon}}
          {{{ Icon key="input" type="visibility" size="36" color='${palette.LIGHT}' fill=1 }}}
        {{/if}}
          <span class="error-text">{{error}}</spna>
      </div> `);
    }
}