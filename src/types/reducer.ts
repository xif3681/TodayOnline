
// An enum with all the types of actions to use in our reducer

export enum ActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  UPDATE = 'UPDATE'
}

// Interface for our state
export interface State {
  loaded: boolean;
  loading: boolean;
  error: Error | null;
  counrt: number;
  data:Array<{ [key: string]: unknown }>
}

export const initialState = {
  loaded: false,
  loading: false,
  error: null,
  counrt: 1,
  data: []
};


// An interface for our actions
export interface Action {
  type: ActionKind;
  payload: Array<{ [key: string]: unknown }>;
}








