'use strict';

const Hapi = require('@hapi/hapi');

// Templating Requirements
const Vision = require('vision')
const Handlebars = require('handlebars')
const Inert = require('inert')



const routesPath = './routes/'


const init = async () => {

  // connection configurations
  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

  await server.register(Vision);
  await server.register(Inert);

  // Routes for static files
  server.route(require(routesPath + 'staticRoutes'))

  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname,
    path: './templates',
    partialsPath: './templates/partials',
    layoutPath: './templates/layout',
    layout: 'index',
    helpersPath: './templates/helpers'
  });

  // routes for the website
  server.route(require(routesPath + 'pageRoutes'))

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
