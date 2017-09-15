import Prismic from "prismic-javascript";
import {contentLoaded} from "./actions/content";

export const apiEndpoint = "https://raphaeltm.prismic.io/api/v2";

export const getApi = async () => {
  return await Prismic.getApi(apiEndpoint);
};

export const linkResolver = (doc) => {
  if(doc.type === "homepage"){
    return '/';
  }
  return `/${doc.type}/` + (doc.uid || '');
};

export const loadSettings = async (store) => {
  const api = await getApi();
  let response = await api.query(Prismic.Predicates.at('document.type', 'settings'));

  if(response.results.length === 1){
    store.dispatch(contentLoaded(response.results[0], 'settings'));
  }
  return response.results[0];
};