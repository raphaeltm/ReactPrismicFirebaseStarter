# Prismic / React Starter

This starter will help you get setup with Prismic and React. 

Webpack is setup so you can use a bunch of es2015 stuff, and it supports Sass, to make styling faster. It's built on redux and includes react-router.

### Installation
Clone this repo and run `npm install`.

### Routing

The way the starter is setup, you will need a document of type "homepage" to render at the root url. To change the way it looks, modify the component at /src/components/homepage.js. Routing is in the format /:type/:uid. If you have a "single" type with the API ID "about", then loading the the url /about will load that document. If you have a "repeatable" type with the API ID "products", then loading the url /products will load the full list of products. If you load the url /products/potato-canon then the app will load just the document of type "products" with the UID "potato-canon". NOTE: *Your repeatable types must have UIDs to work with this starter project*.

### Templating

Whether you have "single" or repeatable types, the appropriate template to render individual documents should be found at /src/components/\[type's API ID\].js. 

*If a type is repeatable, you must give it a UID field*, otherwise this starter won't work. If a type is repeatable, you can also create an index component named in the following format which will receive a full list of your repeatable type: /src/components/\[type's API ID\]-index.js.

Templates are loaded automatically based on the naming conventions above, and are passed the content through a prop named "content". The full document is passed, not just the data, so if you are rendering an individual document (as opposed to an index) that has a title field, you will need to access it through `this.props.content.data.title`. `prismic-reactjs` is included in the starter, so you can render rich text elements like Title fields, or Rich Text fields as follows:

```
import React from "react";
import {RichText} from "prismic-reactjs";

class Homepage extends React.Component {
  render() {
    let page = this.props.content.data;
    return <article>
      <header>
        {page.title && RichText.render(page.title)}
      </header>
    </article>
  }
}

export default Homepage;
```

A check is performed before rendering your template components, so access to `this.props.content.data` is guaranteed.

### Development

Run `npm run start` to get the dev server up and running.

### Deployment

I just added Firebase support. So you can go in and replace the firebase "default" project ID (currently raphaeltm-b740e) with your own firebase project id.

Make sure to have the Firebase tools installed globally using:
`npm install -g firebase-tools`

Then run `npm run deploy` to deploy your app.