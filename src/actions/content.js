export const CONTENT_LOADED = "CONTENT_LOADED";
export const CONTENT_FETCHING = "CONTENT_FETCHING";

export const contentFetching = () => {
  return {
    type: CONTENT_FETCHING
  }
};

export const contentLoaded = (content, type, uid) => {
  return {
    type: CONTENT_LOADED,
    payload: {
      content,
      type,
      uid,
    }
  };
};