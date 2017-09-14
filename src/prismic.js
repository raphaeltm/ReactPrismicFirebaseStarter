const Prismic = require('prismic-javascript');

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