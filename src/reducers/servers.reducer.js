import * as msg from '../constants/constants';

const initialState = [];

const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case msg.SET_SERVERS:
      return [...action.data];

    default:
      return state;
  }
};

export default serversReducer;