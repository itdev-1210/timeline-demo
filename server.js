// server.js
const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare().then(() => {
  console.log('App is running on ' + process.env.PORT);
  express().use(handler).listen(process.env.PORT)
})