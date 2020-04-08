# hireavh.com

## Design

### Icons

Icons imported from [`react-icons`](https://react-icons.netlify.com/#/icons/go).

### Blogs

Blogs are written in markdown and parsed with [`remarkable`](https://github.com/jonschlinkert/remarkable).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm deploy`
Syncs `master` branch to S3 bucket. You need to setup and authenticate AWS CLI first. See [https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af](https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) for more info.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm run updateblogreadme`

Copies README.md into `src` so it can be imported, parsed, and rendered in the `/blog` section of the web app.