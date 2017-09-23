import {getContent} from "../../common/prismic";
import {getTypeContent, getTypePage, getTypeRoot} from "../selectors/content";

export const CONTENT_LOADED = "CONTENT_LOADED";
export const CONTENT_FETCHING = "CONTENT_FETCHING";
export const CONTENT_SET_PAGE = "CONTENT_SET_PAGE";

/**
 * Set the content fetching status to true.
 * @returns {{type: string}}
 */
export const contentFetching = () => {
  return {
    type: CONTENT_FETCHING
  }
};

/**
 * Dispatched upon completion of content load.
 * @param content
 * @param type
 * @param uid
 * @returns {{type: string, payload: {content: *, type: *, uid: *}}}
 */
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

/**
 * Set the currently loaded number of pages for a given type.
 * @param type
 * @param page
 * @returns {{type: string, payload: {type: *, page: *}}}
 */
export const contentTypeSetPage = (type, page) => {
  console.warn(`Setting page for ${type} to ${page}`);
  return {
    type: CONTENT_SET_PAGE,
    payload: {
      type,
      page,
    }
  }
};

/**
 * Load the next page of content for a given type.
 * @param type
 * @returns {function(*, *)}
 */
export const loadMoreContent = (type) => {
  return async (dispatch, getState) => {
    const number = getTypePage(getState(), type) || 1;
    dispatch(contentFetching());
    let content = await getContent(type, null, number+1);
    if(!content.length || content.length === 0) {
      return;
    }
    dispatch(contentTypeSetPage(type, number+1));
    content.map((page) => {
      dispatch(contentLoaded(page, page.type, page.uid));
    });
    return getTypeContent(getState(), type);
  };
};