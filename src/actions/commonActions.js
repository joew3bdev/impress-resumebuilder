import * as types from "./actionTypes";

export function addResume(data) {
  return async function (dispatch) {
    return dispatch({
      type: types.ADD,
      data
    });
  };
}
export function editResume(data) {
  return async function (dispatch) {
    return dispatch({
      type: types.EDIT,
      data
    });
  };
}
export function deleteResume() {
  return async function (dispatch) {
    return dispatch({
      type: types.DELETE,
    });
  };
}

