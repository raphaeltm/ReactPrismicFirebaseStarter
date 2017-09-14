import "babel-polyfill";
import * as functions from "firebase-functions";
import * as sm from "sitemap";
import {getApi, linkResolver} from "./prismic";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const fetchAllPages = async () => {
  const pageSize = 50;
  const api = await getApi();
  let allResults = [];
  const initial = await api.query([], {pageSize: pageSize, page: 1});
  allResults = [...allResults, ...initial.results];
  for (let currentPage = 2; currentPage <= initial.total_pages; currentPage++) {
    let response = await api.query([], {pageSize: pageSize, page: currentPage});
    allResults = [...allResults, ...response.results];
  }
  return allResults;
};

const getURLsFromPages = (pages) => {
  let urls = [];
  pages.map((document) => {
    urls.push({
      url: linkResolver(document)
    });
  });
  return urls;
};

exports.siteMap = functions.https.onRequest(async (req, res) => {
  const pages = await fetchAllPages();

  const sitemap = sm.createSitemap({
    hostname: `${req.protocol}://${req.hostname}`,
    cacheTime: 600000,
    urls: getURLsFromPages(pages)
  });

  sitemap.toXML(function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.set('Cache-Control', 'public, max-age=1800, s-maxage=3600');
    res.send(xml);
  });
});