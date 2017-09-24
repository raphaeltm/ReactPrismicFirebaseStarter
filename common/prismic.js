import Prismic from "prismic-javascript";
import {contentLoaded} from "../src/actions/content";
import {titleCase} from "./utils";

/**
 * The formats of the content that can be returned from a getContent call.
 * @type {{LIST: string, SINGLE: string, REPEATABLE: string}}
 */
export const CONTENT_FORMATS = {
  LIST: 'LIST',
  SINGLE: 'SINGLE',
  REPEATABLE: 'REPEATABLE',
};

/**
 * Endpoint for your Prismic project.
 * @type {string}
 */
export const apiEndpoint = "https://raphaeltm.prismic.io/api/v2";

/**
 * Get the Prismic API.
 * @returns {Promise.<*>}
 */
export const getApi = async () => {
  return await Prismic.getApi(apiEndpoint);
};

/**
 * Link resolver takes a page and returns the appropriate url.
 * @param doc
 * @returns {*}
 */
export const linkResolver = (doc) => {
  if (doc.type === "homepage") {
    return '/';
  }
  return `/${doc.type}/` + (doc.uid || '');
};

/**
 * Load the settings page into store.
 * @param store
 * @returns {Promise.<void>}
 */
export const loadSettings = async (store) => {
  let settings = await getContent('settings');
  store.dispatch(contentLoaded(settings, 'settings', null));
};

/**
 * Get content from Prismic given a type, a uid (or not), and a page (or not).
 * If a UID is provided, or the type is Single, this will return the identified page.
 * If the type is repeatable and there is no UID, an array will be returned.
 * @param type
 * @param uid
 * @param page
 * @returns {Promise.<*>}
 */
export const getContent = async (type, uid, page) => {
  const api = await getApi();

  if (!type && !uid) {
    return await getContent('homepage');
  }

  if (uid) {
    const page = await api.getByUID(type, uid);
    if (page) {
      return page;
    }
    else {
      return null;
    }
  }
  else {
    let options = getTypeOptions(type);
    if(page){
      options.page = page;
    }
    let response = await api.query(
      Prismic.Predicates.at('document.type', type),
      options
    );

    if (response.results.length === 0) {
      return null;
    }
    else if (!!response.results[0].uid) {
      return response.results;
    }
    else {
      return response.results[0];
    }
  }
};

/**
 * Returns the format of the content returned from a getContent call.
 * @param content
 * @returns {*}
 */
export const getFormat = (content) => {
  if (typeof content.length !== 'undefined') {
    return CONTENT_FORMATS.LIST;
  }
  else if (content.uid) {
    return CONTENT_FORMATS.REPEATABLE;
  }
  else {
    return CONTENT_FORMATS.SINGLE;
  }
};

/**
 * Returns the type's API ID, titlecased and with hyphens replaced with spaces.
 * @param type
 */
export const getTypeTitle = (type) => {
  const typeSpaces = type.replace('-', ' ');
  return titleCase(typeSpaces);
};

/**
 * Configure prismic settings here.
 */
export const PRISMIC_SETTINGS = {
  GLOBAL: {
    pageSize: 25,
    orderings: [
      {
        on: 'document',
        field: 'first_publication_date',
        order: 'desc'
      }
    ],
    lang: null,
  },
  TYPES: {
    blog: {
      pageSize: 2,
    }
  },
};

const generateOrderingText = (obj, last=false) => {
  return `${obj.on}.${obj.field} ${obj.order}${last ? '' : ','}`;
};

export const getTypeOptions = (type, raw=false) => {
  let settings = {
    ...PRISMIC_SETTINGS.GLOBAL,
    ...(PRISMIC_SETTINGS.TYPES[type] || {})
  };
  if(raw){
    return settings;
  }
  const final = {
    pageSize: settings.pageSize,
    orderings: `[${settings.orderings.map((ordering, index)=>{
      return generateOrderingText(ordering, index+1 === settings.orderings.length);
    })}]`,
    lang: settings.lang,
  };
  console.log(final);
  return final;
};