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

Runs the Express server in production mode on port 3000, and automatically serves static content from `client/build`.

## Port Trickery

You may have noticed that the API server runs on port 3001 in dev and 3000 in prod. Why? Because this actually enables a consistent environment where you can switch between dev and prod without changing ports. You should always connect to port 3000 to view your project.
 
In dev the CRA server proxies the Express server because CRA has this option built in.
  
In prod the Express server serves static assets from the CRA build.

Port consistency for the servers would be nice but it doesn't practically affect how this project is used in any way.

## Further Development

This repo is only meant to be a starting point. It's likely that in production you will want to run the project differently from how `yarn prod` does it by default. Things like...

* Serve static content from a CDN
* Use `nodemon`, `PM2`, or something else to keep your prod server running/load-balanced. 