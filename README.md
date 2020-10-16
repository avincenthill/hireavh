# hireavh.com
[hireavh.com](https://hireavh.com/) is a React.js application with information and projects by Alex "AVH" Vincent-Hill.


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

You will have to `brew install coreutils` to use `ghead` before running this on Mac.

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

### `npm run newcomponent`
Copies `src/components/Default` directory and files and renames directory with input $NAME. For example, run `Name=MyNewComponentName npm run newcomponent` and find and replace `Default` -> `MyNewComponentName` and `default` -> `mynewcomponentname` within `/src/components/MyNewComponentName`.