# hireavh.com
[hireavh.com](https://hireavh.com/) is a React.js application with information and projects by Alex "AVH" Vincent-Hill.

## Design
### Icons
Icons imported from [`react-icons`](https://react-icons.netlify.com/#/icons/go).

### Blogs
Blogs are written in markdown and parsed with [`remarkable`](https://github.com/jonschlinkert/remarkable).

## Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm format`
Formats files in the repo with Prettier.

### `npm test`
Launches the test runners in the interactive watch mode. The available options are:
- `npm test`: runs Jest unit tests and prints coverage with istanbul/ghead.
- `npm test:unit`: runs Jest unit tests.
- `npm test:int`: runs Cypress integration tests.
- `npm test:snap`: updates DOM snapshot testing.
You will have to `brew install coreutils` to use `ghead` before running this on Mac to print test coverage.

### `npm lint`
Lints with eslint. The available options are:
- `npm lint`: runs eslint on .js and .jsx files.
- `npm lint:fix`: runs eslint on .js and .jsx files in fix mode.

### `npm deploy`
Syncs `master` branch to S3 bucket. You need to setup and authenticate AWS CLI first. See [https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af](https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) for more info.

### `npm run updateblogreadme`
Copies README.md into `src` so it can be imported, parsed, and rendered in the `/blog` section of the web app.

### `npm run newcomponent`
Copies `src/components/Default` directory and files and renames directory with input $NAME. For example, run `Name=MyNewComponentName npm run newcomponent` and find and replace `Default` -> `MyNewComponentName` and `default` -> `mynewcomponentname` within `/src/components/MyNewComponentName`.