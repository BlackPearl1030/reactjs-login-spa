
import * as msg from '../constants/constants';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case msg.SET_USER_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    case msg.SET_USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;