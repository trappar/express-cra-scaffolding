Express CRA Scaffolding
--------------------

This repo is a bare-bones boilerplate which can be used to start a React based project backed by an Express API.

## How to Use
  
1. Download a copy of this repository and unpack it to the project directory
2. Run: `yarn && cd client && yarn`

## Available Scripts

### `yarn dev`

Runs the Express server on port 3001 and the create-react-app server on port 3000. The development server will attempt to send requests without text/html in its Accept header to the express server using a proxy.

### `yarn build`

Runs the create-react-app build process. This produces a production optimized static build at `client/build`

### `yarn prod`

Runs the Express server in production mode, and automatically serves static content from `client/build`.

## Further Development

This repo is only meant to be a starting point. It's likely that in production you will want to run the project differently from how `yarn prod` does it by default. Things like...

* Serve static content from a CDN
* Use `nodemon`, `PM2`, or something else to keep your prod server running/load-balanced. 