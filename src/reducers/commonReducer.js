import * as types from "../actions/actionTypes";


const initialState = {
  resume:false,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD: {
      return Object.assign({}, state, {
        resume:action.data,

      })
    }
    case types.EDIT: {
      return Object.assign({}, state, {
        resume:action.data,

      })
    }
    case types.DELETE: {
      return Object.assign({}, state, {
        resume: false,

      })
    }
    default:
      return state;
  }
}
