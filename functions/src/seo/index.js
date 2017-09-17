import * as SEOBasics from "./basic";

export const buildSEOData = (content, settings, type, uid) => {
  return {
    title: SEOBasics.getTitle(content, settings, type)
  };
};