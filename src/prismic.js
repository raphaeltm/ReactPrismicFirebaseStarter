const Prismic = require('prismic-javascript');

let apiEndpoint = "https://raphaeltm.prismic.io/api/v2";

export let getApi = async () => {
  return await Prismic.getApi(apiEndpoint);
};

export let linkResolver = (doc) => {
  if(doc.type === "homepage"){
    return '/';
  }
  return `/${doc.type}/` + doc.uid;
};