import {
  actionTypes
} from './action';

export const initState = {
  userId: null,
  token: null,
  error: null,
  isLoggedIn: false,
  isActive: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        ...{
          error: action.error,
          isLoggedIn: false,
        },
      };

    case actionTypes.LOGIN_SUCCESS:
      console.log(action)
      return {
        ...state,
        ...{
          error: null,
          isLoggedIn: true,
          token: action.payload.token,
          userId: action.payload.userId,
          isActive: action.payload.isActive
        },
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        ...{
          isLoggedIn: false
        },

      };

    default:
      return state;
  }
}

export default reducer;