import { initialState } from "./initialState";
    
// Create a reducer function - A reducer takes the existing state and applies the message on it
// Takes action and gives new data
// Can use switch statement
// Reducer takes state and action
// create state and logic taht manipulate state

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const copy = { ...state };
      copy.count += 1;
      return copy;
    }

    case "DECREMENT": {
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }

    case "RESET": {
    const copy = { ...state };
    copy.count = 0;
    return copy;
    }

    default:
      return initialState;
  }
}
