import * as msg from '../constants/constants';

export const setServers = (data) => {
  return {
    type: msg.SET_SERVERS,
    data,
  };
};