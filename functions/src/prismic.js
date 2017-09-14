import Prismic from "prismic-javascript";
import {apiEndpoint, linkResolver as lr} from "../../src/prismic";

export const getApi = async () => {
  return await Prismic.getApi(apiEndpoint);
};

export const linkResolver = lr;