import Prismic from "prismic-javascript";
import {contentLoaded} from "../src/actions/content";
import {titleCase} from "./utils";

export const CONTENT_FORMATS = {
  LIST: 'LIST',
  SINGLE: 'SINGLE',
  REPEATABLE: 'REPEATABLE',
};

export const apiEndpoint = "https://raphaeltm.prismic.io/api/v2";

export const getApi = async () => {
  return await Prismic.getApi(apiEndpoint);
};

export const linkResolver = (doc) => {
  if (doc.type === "homepage") {
    return '/';
  }
  return `/${doc.type}/` + (doc.uid || '');
};

export const loadSettings = async (store) => {
  let settings = await getContent('settings');
  store.dispatch(contentLoaded(settings, 'settings'));
};

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
    let options = {
      pageSize: PRISMIC_SETTINGS.NUM_PER_PAGE
    };
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

export const getTypeTitle = (type) => {
  const typeSpaces = type.replace('-', ' ');
  return titleCase(typeSpaces);
};

export const PRISMIC_SETTINGS = {
  NUM_PER_PAGE: 1
};