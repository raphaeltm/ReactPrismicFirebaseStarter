import {isEmptyObject} from "../../common/utils";
import {CONTENT_FORMATS} from "../../common/prismic";

/**
 * Get the root for a type.
 * @param state
 * @param type
 */
export const getTypeRoot = (state, type) => {
  const content = state.content;
  return content[type];
};

/**
 * Get the raw content for a type.
 * @param state
 * @param type
 * @returns {null}
 */
export const getTypeContent = (state, type) => {
  const root = getTypeRoot(state, type);
  if (!root) {
    return null;
  }
  return root.content;
};

/**
 * Get the content for a given type (optional UID) formatted appropriately.
 * @param state
 * @param type
 * @param uid
 * @returns {*}
 */
export const getFormattedContent = (state, type, uid) => {
  const baseContent = getTypeContent(state, type);
  if(!baseContent){
    return null;
  }
  if (uid) {
    return getTypeByUID()
  }
  else {
    return (getTypeFormat(state, type) === CONTENT_FORMATS.REPEATABLE) ?
      getOrderedContent(state, type) :
      getTypeContent(state, type)
  }
};

/**
 * Get a page by type and uid.
 * @param state
 * @param type
 * @param uid
 * @returns {null}
 */
export const getTypeByUID = (state, type, uid) => {
  const content = getTypeContent(state, type);
  if (!content) {
    return null;
  }
  if (content[uid]) {
    return content[uid];
  }
  else {
    return null;
  }
};

/**
 * Get the current loaded page.
 * @param state
 * @param type
 * @returns {null}
 */
export const getTypePage = (state, type) => {
  const root = getTypeRoot(state, type);
  if (root.page) {
    return root.page;
  }
  else {
    return null;
  }
};

/**
 * For repeatable types, get content in order.
 * @param state
 * @param type
 * @param predicate
 * @param order
 * @returns {Array.<*>}
 */
export const getOrderedContent = (state, type, predicate, order) => {
  if (!predicate) {
    predicate = (page) => {
      return page.first_publication_date;
    };
  }
  if (!order) {
    order = 'DESC';
  }
  const content = getTypeContent(state, type);
  const contentArray = Object.keys(content).map((page) => content[page]);
  return contentArray.sort((pageA, pageB) => {
    if (order === 'ASC') {
      return predicate(pageA) > predicate(pageB);
    }
    else {
      return predicate(pageA) < predicate(pageB);
    }
  });
};

/**
 * Get the format of the type based on loaded content.
 * @param state
 * @param type
 * @returns {*}
 */
export const getTypeFormat = (state, type) => {
  const content = getTypeContent(state, type);
  if (!content || isEmptyObject(content)) {
    return null;
  }
  if(content.id){
    return CONTENT_FORMATS.SINGLE;
  }
  else {
    return CONTENT_FORMATS.REPEATABLE;
  }
};