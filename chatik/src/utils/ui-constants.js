const uiConstants = {
  headers: {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    ERROR_404: '404',
    ERROR_500: '500',
    CHAT_LIST: 'Chat list',
    USERS_LIST: 'Users list',
    DELETE_CHAT: 'Delete chat',
    DELETE_USER: 'Delete user',
  },
  text: {
    PAGE_NOT_FOUND: 'Page not found',
    INTERNAL_SERVER_ERROR: 'Internal server error',
  },
  buttons: {
    LOGIN: 'Login',
    REGISTER: 'Register',
    CREATE_ACCOUNT: 'Create account',
    HAVE_ACCOUNT: 'Have an account?',
    GO_BACK: 'Go back',
    SAVE: 'Save',
    CHANGE_PASSWORD: 'Change password',
    DELETE: 'DELETE',
  },
  placeholders: {
    LOGIN: 'login',
    EMAIL: 'email',
    FIRST_NAME: 'first name',
    LAST_NAME: 'last name',
    PHONE_NUMBER: 'phone number',
    DISPLAY_NAME: 'display name',
    PASSWORD: 'password',
    REPEAT_PASSWORD: 'repeat password',
    SEARCH: 'Search',
    MESSAGE: 'Message',
  },
  errors: {
    WRONG_PASSWORD: 'wrong password',
    LOGIN_DOES_NOT_EXIST: 'login does not extist',
    PASSWORDS_DO_NOT_MATCH: 'passwords do not match',
  },
  warnings: {
    DELETE_CHAT: 'Are you sure you want to delete chat',
    DELETE_USER: 'Are you sure you want to delete user',
  },
  palette: {
    PRIMARY: '#bb86fc',
    LIGHT: '#c89efc',
    DARK: '#825db0',
    ON_PRIMARY: '#ffffff',
  },
  settings: {
    edit_mode: true,
  },
};

export default uiConstants;
