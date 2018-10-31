import { ENTER_KEY_CODE, ESC_KEY_CODE } from './constants';

export const preventFocus = (e) => e.preventDefault();

export const enterKeyHandler = (callback) => (e) => {
  if (e.keyCode === ENTER_KEY_CODE) callback(e);
};

export const escKeyHandler = (callback) => (e) => {
  if (e.keyCode === ESC_KEY_CODE) callback(e);
};
