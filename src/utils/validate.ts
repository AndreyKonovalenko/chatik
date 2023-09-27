import uiConstants from './ui-constants';
const { errors } = uiConstants;

type TValidator = (value: string) => string

export type TValidate  =  {
  login: TValidator;
  password: TValidator;
  email: TValidator;
  phone: TValidator;
  first_name: TValidator;
  second_name: TValidator;
  search: TValidator;
  message: TValidator
}

export const validate: TValidate = {
  login: (value: string) => {
    const regExp = /^[a-z]([a-z0-9_-]){3,20}$/gi;
    return value.match(regExp) === null ? errors.LOGIN_VALIDATION_FAILED : '';
  },
  password: (value: string) => {
    const regExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/g;
    return value.match(regExp) === null
      ? errors.PASSWORD_VALIDATION_FAILED
      : '';
  },
  email: (value: string) => {
    const regExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    return value.match(regExp) === null ? errors.MAIL_VALIDATION_FAILED : '';
  },
  phone: (value: string) => {
    const regExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{10,15}$/gi;
    return value.match(regExp) === null ? errors.PHONE_VALIDATION_FAILED : '';
  },
  first_name: (value: string) => {
    const regExp = /^[A-ZА-ЯË-][a-zа-яё-]+/g;
    return value.match(regExp) === null
      ? errors.FIRST_NAME_VALIDATION_FAILED
      : '';
  },
  second_name: (value: string) => {
    const regExp = /^[A-ZА-ЯË-][a-zа-яё-]+/g;
    return value.match(regExp) === null
      ? errors.SECOND_NAME_VALIDATION_FAILED
      : '';
  },
  search: (value: string) => {
    const regExp = /[\S\s]+[\S]+/;
    return value.match(regExp) === null ? errors.SEARCH_VALIDATION_FAILED : '';
  },
  message: (value: string) => {
    const regExp = /[\S\s]+[\S]+/;
    return value.match(regExp) === null ? errors.MESSAGE_VALIDATION_FAILED : '';
  },
};
