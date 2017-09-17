import * as PrismicDOM from "prismic-dom";
import * as PrismicUtils from "../../../common/prismic";

export const getTitle = (content, settings, type) => {
  const settingsData = settings.data;
  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {
    return `${PrismicUtils.getTypeTitle(type)} | ${settingsData.site_title}`;
  }
  else {
    const data = content.data;
    return `${data.title && `${PrismicDOM.RichText.asText(data.title)} | `}${settingsData.site_title}`
  }
};