import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL 
} from '../actions/types';

const INITIAL_STATE = { 
  email: '', 
  password: '',
  user: null,
  error: '' 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // This first creates a new object.
      // It needs to be a new object for redux to do anything with it.
      // It ads state first and then overwrites email in state if it exists.
      // This happens every time we type a new letter into the email field.
      return { ...state, email: action.payload }; 
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed.', password: '' };
    default:
      return state;
  }
};
