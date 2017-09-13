export const CONTENT_LOADED = "CONTENT_LOADED";

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