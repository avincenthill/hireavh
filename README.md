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
Builds the project and syncs the build to S3 bucket. During the process tests are run and the last git hash is saved to render as a version meta tag.

You need to setup and authenticate AWS CLI first. See [https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af](https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) for more info.

### `npm run updateblogreadme`
Copies README.md into `src` so it can be imported, parsed, and rendered in the `/blog` section of the web app.

### `npm run newcomponent`
Copies `src/components/_Default` directory and files and renames directory with input $NAME. For example, run `NAME=MyNewComponentName npm run newcomponent` and find and replace `_Default` -> `MyNewComponentName` and `_default` -> `mynewcomponentname` within `/src/components/MyNewComponentName`.

## Project Ideas
- Make collisions in Plasma Breakout more physical and realistic
- Implement a boids algorithm for Plasma Breakout targets
- Build a random Spanish/English words flashcards app
- Render lichess.org rating
- Build a binary math calculator
- Build a stock ticker tape with largest US equity moves per day

## Refactoring Opportunities
- Document and refactor how style colors are handled
- Implement global state solution like Redux
    - Untoggle all project "?" buttons on click of one
- Persist todos and other state in DB
- List blogs by date, and then alphabetically by title
- Integration test sorting algos implementation
- Implement server-side rendering
- Implement open graph tags
- Set up Stryker mutation testing
- Add accessibility features like Aria labels

## Bugs
- Fix issue where changing dark mode to light mode doesn't change icon color
- Fix npm warning `./node_modules/pdfjs-dist/build/pdf.js Critical dependency: require function is used in a way in which dependencies cannot be statically extracted`
- Fix flaky 'should sleep correctly' test that fails occasionally
- Harden dynamic-form user input to stop crashing on bad inputs