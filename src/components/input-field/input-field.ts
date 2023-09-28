import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants';
import { TValidate } from '../../utils/validate';
import { ErrorLine } from '../error-line/error-line';
const { palette } = uiConstants;

type TInputField = {
  validate: (value: string) => TValidate;
  isValidValue: () => void;
  onBlur: () => void;
  type: string;
  name: string;
  placeholder: string;
  value: string;
};

export class InputField extends Block<TInputField | any> {
  constructor(props: TInputField) {
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
    return (this.refs?.[this.props.ref] as InputField).value();
  }

  private validate() {
    const value = this.getValue();
    const error = this.props.validate(value);
    if (error) {
      (this.refs?.errorLine as ErrorLine).setProps({ error });
      return false;
    }
    (this.refs?.errorLine as ErrorLine).setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    const { ref, type, name, placeholder, value } = this.props;
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
