import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
import { TValidate, validate } from '../../utils/validate.ts';
import { InputField } from '../input-field/input-field.ts';
const { headers, placeholders, buttons } = uiConstants;


type TProfileModal = { 
  validate: TValidate
  onSave: (e: Event)=> void;
  onCreateAccount: (e: Event) => void
}

type Ref = {
  oldPassword: InputField;
  newPassword: InputField;
  repeat_password: InputField
}

export class ProfileModal extends Block<TProfileModal, Ref> {
  constructor(props: TProfileModal) {
    super({
      ...props,
      validate: validate,
      onSave: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
      onCreateAccount: (event: Event) => {
        event.preventDefault();
      },
    });
  }
  public sendForm() {
    const oldPassword = this.refs.oldPassword.isValidValue();
    const newPassword = this.refs.newPassword.isValidValue();
    const repeat_password = this.refs.repeat_password.isValidValue();
    console.log({ oldPassword, newPassword, repeat_password });
  }

  protected render(): string {
    return `
          {{#> Modal}}
              <div class="profile-modal-container">
                  {{#> Form form_title="${headers.CHANGE_PASSWORD}"}}
                    {{{ InputField name="oldPassword" placeholder="${placeholders.CURRENT_PASSWORD}" type="password" icon=true ref="oldPassword" value='' validate=validate.password }}}
                    {{{ InputField name="newPassword" placeholder="${placeholders.NEW_PASSWORD}" type="password" icon=true ref="newPassword" value='' validate=validate.password }}}
                    {{{ InputField name="repeat_password" placeholder="${placeholders.REPEAT_PASSWORD}" type="password" icon=true ref="repeat_password" value='' validate=validate.password }}}
                    <div class="login-button-container">
                      {{{ Button type="submit" text='${buttons.SAVE}' onClick=onSave }}}
                    </div>
                  {{/ Form}}
              </div>
          {{/ Modal}}
        `;
  }
}
