import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants';
import { TInput } from '../input/input';
const { palette } = uiConstants;
type TInputFied = {
  isValidValue: () => void;
};

export class InputField extends Block<TInputFied | any> {
  constructor(props: TInputFied & TInput) {
    super({
      ...props,
      onBlur: () => {
        this.validate();
      },
    });
  }
  public isValidValue() {
    if (!this.validate()) {
      return false;
    }
    return this.getValue();
  }

  public getValue(): string {
    return this.refs?.[this.props.ref].value();
  }

  private validate() {
    const value = this.getValue();
    const error = this.props.validate(value);
    if (error) {
      this.refs?.errorLine.setProps({ error });
      return false;
    }
    this.refs?.errorLine.setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    const { ref, type, name, placeholder, value } = this.props as TInput;
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
          {{{ Icon key="input" type="visibility" size="36" color='${palette.LIGHT}' fill=1  }}}
        {{/if}}
        {{{ ErrorLine error=error ref="errorLine" }}}
      </div> `;
  }
}
