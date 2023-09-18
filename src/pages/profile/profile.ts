import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { placeholders, buttons, errors, palette } = uiConstants;
import { setModal } from '../../utils/setModal.ts';
import _mock_users from '../../__mocks__/_mock_users';
import { ProfileModal } from '../../components/profile-modal/profile-modal.ts';

class ProfilePage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
      onChangePassword: (event) => {
        event.preventDefault();
        setModal(ProfileModal);
      },

      inputs: [
        {
          name: 'first_name',
          field_name: placeholders.FIRST_NAME,
          placeholder: _mock_users[0].first_name,
          type: 'text',
          disabled: true,
        },
        {
          name: 'second_name',
          field_name: placeholders.LAST_NAME,
          placeholder: _mock_users[0].second_name,
          type: 'text',
          disabled: true,
        },
        {
          name: 'display_name',
          field_name: placeholders.DISPLAY_NAME,
          placeholder: _mock_users[0].display_name,
          type: 'text',
          disabled: true,
        },
        {
          name: 'login',
          field_name: placeholders.LOGIN,
          placeholder: _mock_users[0].login,
          type: 'login',
          disabled: true,
        },
        {
          name: 'phone',
          field_name: placeholders.PHONE_NUMBER,
          placeholder: _mock_users[0].phone,
          type: 'text',
          disabled: true,
        },
        {
          name: 'email',
          field_name: placeholders.EMAIL,
          placeholder: _mock_users[0].email,
          type: 'email',
          disabled: true,
        },
      ],
    });
  }

  protected render(): string {
    return `( 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form}}
                  <div class="profile-icon-container">
                    <div class="profile-icon-container-item">
                      {{{ Icon key="profile-form-icon" type="edit" size="36" color="${palette.ON_PRIMARY}" fill=0}}}
                    </div>
                  </div>
                  <div class="profile-image-container">
                     <img class="profile-image" src="${_mock_users[0].avatar}" alt="avater" width="200" height="200"/>
                     <p class="profile-image-card-text">${_mock_users[0].display_name}</p>
                  </div>
                    {{#each  inputs}}
                       {{{ ProfileInput type=this.type name=this.name placeholder=this.placeholder field_name=this.field_name  disabled=this.disabled}}}
                    {{/ each}}
                    <div class="profile-button-container">
                      {{{ Button type="submit" text='${buttons.CHANGE_PASSWORD}' onClick=onChangePassword }}}
                    </div>
                {{/ Form}}
            <div>
        {{/ Layout}}
        )`;
  }
}

export default ProfilePage;
