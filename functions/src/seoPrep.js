import * as functions from "firebase-functions";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {getContent, getFormat, CONTENT_FORMATS} from "../../common/prismic";
import * as pug from "pug";
const cors = require('cors')({origin: true});
import * as Prismic from "prismic-dom";
import {buildSEOData} from "./seo/index";

const app = express();

app.use(cors);
app.use(cookieParser());
app.use(bodyParser.json());

const buildState = (settings, content, type) => {
  let state = {
    content: {
      settings: settings
    }
  };

  if(getFormat(content) === CONTENT_FORMATS.LIST){
    state.content[type] = {};
    content.map((page) => {
      state.content[type][page.uid] = page;
    });
  }
  else if(getFormat(content) === CONTENT_FORMATS.SINGLE){
    state.content[type] = content;
  }
  else {
    state.content[type] = {
      [content.uid]: content
    }
  }

  return state;
};

const handler = async (req, res) => {
  const {type, uid} = req.params;

  const renderIndex = pug.compileFile('./src/index.pug');
  const render404 = pug.compileFile('./src/404.pug');

  const settings = await getContent('settings');
  const content = await getContent(type, uid);

  if(!content){
    res.status(404);
    res.set('Content-Type', 'text/html');
    res.send(render404());
  }

  const context = {
    data: buildSEOData(content, settings, type, uid),
    state: JSON.stringify(buildState(settings, content, type)),
    Prismic: Prismic,
  };

  res.set('Content-Type', 'text/html');
  res.send(renderIndex(context));
};

app.get('/:type/:uid', handler);
app.get('/:type', handler);
app.get('/', handler);

export const seoPrep = functions.https.onRequest(app);