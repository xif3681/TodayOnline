
import { ActionKind , State , Action } from "@/types/reducer"



// Our reducer function that uses a switch statement to handle our actions
export function userReducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.INCREASE:
      return {
        ...state,
        counrt: state.counrt + 1
        // value: state.count + payload,
      };
    case ActionKind.DECREASE:
      return {
        ...state,
        counrt: state.counrt - 1
        // value: state.count - payload,
      };
    case ActionKind.UPDATE:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: payload
      }
    default:
      return state;
  }
}