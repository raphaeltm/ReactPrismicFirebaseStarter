import * as contentActions from "../actions/content";

const defaultState = {
  _fetching: false,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case contentActions.CONTENT_LOADED:
      const {content, type, uid} = action.payload;
      if (!uid) {
        return {
          ...state,
          [type]: content,
          _fetching: false,
        }
      }
      else {
        const typeState = {...(state[type] || {})};
        const newTypeState = {...typeState, [uid]: content};
        return {
          ...state,
          [type]: newTypeState,
          _fetching: false,
        };
      }
      break;
    case contentActions.CONTENT_FETCHING:
      return {
        ...state,
        _fetching: true,
      };
      break;
    default:
      return state;
  }
};