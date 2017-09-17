import * as PrismicDOM from "prismic-dom";
import * as PrismicUtils from "../../../common/prismic";

export const getTitle = (content, settings, type) => {
  const settingsData = settings.data;
  const typeTitle = type ? PrismicUtils.getTypeTitle(type) : '';
  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {
    return `${typeTitle} Index | ${settingsData.site_title}`;
  }
  else {
    const data = content.data;
    return `${data.title && `${PrismicDOM.RichText.asText(data.title)} | ${typeTitle} | `}${settingsData.site_title}`
  }
};