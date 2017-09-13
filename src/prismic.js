const Prismic = require('prismic-javascript');

let apiEndpoint = "https://vancouverbcdesign.prismic.io/api/v2";

export let getApi = async () => {
  return await Prismic.getApi(apiEndpoint);
};

export let linkResolver = (doc) => {
  return `/${doc.type}/` + doc.uid || doc.id;
};