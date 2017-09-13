import * as contentActions from "../actions/content";

const defaultState = {};

export const reducer = (state = defaultState, action) => {
  switch(action.type){
    case contentActions.CONTENT_LOADED:
      const {content, type, uid} = action.payload;
      if(!uid){
        return {...state, [type]: content}
      }
      else {
        const typeState = {...(state[type] || {})};
        const newTypeState = {...typeState, [uid]: content};
        return {
          ...state,
          [type]: newTypeState
        };
      }
      break;
    default:
      return defaultState;
  }
};