import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants';
import { TInput } from '../input/input';
const { palette } = uiConstants;
type TInputFied = {
  onChange: (name: string, value: string) => void;
};

export class InputField extends Block {
  constructor(props: TInputFied & TInput) {
    super({
      ...props,
      onBlur: () => {
        const value = this.getValue();
        props.onChange(props.name, value);
      },
    });
  }

  public getValue(): string {
    return this.refs?.[this.props.ref].value();
  }

  protected render(): string {
    const { ref, type, value, name, placeholder } = this.props as TInput;

    return `
        <div class='input-wrapper'>
          {{{
            Input   
            className='input'
            type="${type}"
            value="${value}"
            ref="${ref}"
            name="${name}"
            placeholder="${placeholder}"
            onBlur=onBlur
          }}}
        {{#if icon}}
          {{{ Icon key="input" type="visibility" size="36" color='${palette.LIGHT}' fill=1 }}}
        {{/if}}
          <span class="error-text">{{error}}</spna>
      </div> `;
  }
}
