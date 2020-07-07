import {
  USER_FETCH,
  USER_UPDATE,
  USER_DELETE
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : []
      };
    case USER_UPDATE:
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : []
      };
    case USER_DELETE:
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : []
      };
    default:
      return state;
  }
};
