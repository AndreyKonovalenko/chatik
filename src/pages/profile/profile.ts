import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
import { setModal } from '../../utils/setModal.ts';
import { usersMock } from '../../mocks/users-mock.js';
import { ProfileModal } from '../../components/profile-modal/profile-modal.ts';
import store, { StoreEvents } from '../../services/Store.ts';
import { validate } from '../../utils/validate.ts';
import ProfileInputField from '../../components/profile-input-field/profile-input-field.ts';
import { getProfileState } from '../../services/stateSelectors.ts';

const { placeholders, buttons, palette } = uiConstants;

type TProfileInput = {
  name: string;
  field_name: string;
  placehodler: string;
  value: string;
  type: string;
  disabled: boolean;
};

type TProfilePage = {
  editMode: boolean;
  onChangePssword: (e: Event) => void;
  input: TProfileInput[];
};

class ProfilePage extends Block<TProfilePage> {
  constructor() {
    super({
      onChangePassword: (event: Event) => {
        event.preventDefault();
        setModal(ProfileModal);
      },
      onEditProfile: (event: Event) => {
        event.preventDefault();
        const state = { ...store.getState() };
        store.set({
          ...state,
          profile: { ...state.profile, editMode: !state.profile.editMode },
        });
      },
      onSave: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
      validate: validate,
      inputs: [
        {
          name: 'phone',
          field_name: placeholders.PHONE_NUMBER,
          placeholder: '',
          value: usersMock[0].phone,
          type: 'text',
          disabled: true,
        },
        {
          name: 'email',
          field_name: placeholders.EMAIL,
          placeholder: '',
          value: usersMock[0].email,
          type: 'email',
          disabled: true,
        },
      ],
    });
    store.on(StoreEvents.Updated, () => {
      const { editMode } = getProfileState();
      this.props.editMode = editMode;
    });
  }

  public sendForm() {
    const first_name = (
      this.refs.first_name as unknown as ProfileInputField
    ).isValidValue();
    const second_name = (
      this.refs.second_name as unknown as ProfileInputField
    ).isValidValue();
    const display_name = (
      this.refs.display_name as unknown as ProfileInputField
    ).getValue();
    const login = (
      this.refs.login as unknown as ProfileInputField
    ).isValidValue();
    const phone = (
      this.refs.phone as unknown as ProfileInputField
    ).isValidValue();
    const email = (
      this.refs.email as unknown as ProfileInputField
    ).isValidValue();
    console.log({ first_name, second_name, display_name, login, phone, email });
  }

  protected render(): string {
    const saveButton = `
    <div class="profile-button-container">
      {{{ Button type="submit" text='${buttons.SAVE}' onClick=onSave }}}
    </div>
    `;
    const changePassowrd = `
    <div class="profile-button-container">
      {{{ Button type="submit" text='${buttons.CHANGE_PASSWORD}' onClick=onChangePassword }}}
    </div>
    `;

    return `( 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form}}
                  <div class="profile-icon-container">
                    <div class="profile-icon-container-item">
                      {{{ Icon key="profile-form-icon" type="edit" size="36" color="${
                        this.props.editMode ? palette.DARK : palette.ON_PRIMARY
                      }" fill=0 onClick=onEditProfile }}}
                    </div>
                  </div>
                  <div class="profile-image-container">
                     <img class="profile-image" src="${
                       usersMock[0].avatar
                     }" alt="avater" width="200" height="200"/>
                     <p class="profile-image-card-text">${
                       usersMock[0].display_name
                     }</p>
                  </div>
                    {{{ ProfileInputField type='text' ref='first_name' name='first_name' placeholder="" value="${
                      usersMock[0].first_name
                    }" field_name="${placeholders.FIRST_NAME}"  disabled=${
      this.props.editMode ? false : true
    } validate=validate.first_name }}}
                    {{{ ProfileInputField type='text' ref='second_name' name='second_name' placeholder="" value="${
                      usersMock[0].second_name
                    }" field_name="${placeholders.LAST_NAME}"  disabled=${
      this.props.editMode ? false : true
    } validate=validate.second_name }}}
                    {{{ ProfileInputField type='text' ref='display_name' name='display_name' placeholder="" value="${
                      usersMock[0].display_name
                    }" field_name="${placeholders.DISPLAY_NAME}"  disabled=${
      this.props.editMode ? false : true
    } }}}
                    {{{ ProfileInputField type='text' ref='login' name='login' placeholder="" value="${
                      usersMock[0].login
                    }" field_name="${placeholders.LOGIN}"  disabled=${
      this.props.editMode ? false : true
    } validate=validate.login }}}
                    {{{ ProfileInputField type='text' ref='phone' name='phone' placeholder="" value="${
                      usersMock[0].phone
                    }" field_name="${placeholders.PHONE_NUMBER}"  disabled=${
      this.props.editMode ? false : true
    } validate=validate.phone }}}
                    {{{ ProfileInputField type='text' ref='email' name='email' placeholder="" value="${
                      usersMock[0].email
                    }" field_name="${placeholders.EMAIL}"  disabled=${
      this.props.editMode ? false : true
    } validate=validate.email }}}
                    ${!this.props.editMode ? changePassowrd : saveButton}
                {{/ Form}}
            <div>
        {{/ Layout}}
        )`;
  }
}

export default ProfilePage;
