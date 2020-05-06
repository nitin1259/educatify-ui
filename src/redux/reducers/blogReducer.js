import * as actionTypes from "../action-types";

export default function (state = 0, { type, payload }) {
  switch (type) {
    case actionTypes:
      return state + payload;
    default:
      return state;
  }
}
