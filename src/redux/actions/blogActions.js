import * as actionTypes from "../action-types";

export function doIncrement(num = 1) {
  return {
    type: actionTypes.INCREMENT,
    payload: num,
  };
}
