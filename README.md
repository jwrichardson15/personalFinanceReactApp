# Welcome to the Personal Finance React App!

This app is in the early stages of development. It serves as an aggregating for personal finance information and research. At this time, the app's main functions are: an investing summary with a custom twitter feed for live stock updates, a portfolio page, a watch list that can be actively modified, and a research page to gather information on any US stock.

# Setup Firebase

Setup a personal firebase account at the following url: https://firebase.google.com/

Request the Firebase API key and save as `REACT_APP_FIREBASE_API_KEY` within a .env file.

Request permission from jwrichardson15 to create a login account. Currently this application only supports one account, with many users.

# API and Configuration

Navigate to RAPID API and create an account at the following url: https://rapidapi.com/

Obtain an API key and save as `REACT_APP_RAPID_API_KEY` within the .env file.

Create a Twitter Profile and List, or navigate to a public list of your choosing. Add your username as `REACT_APP_TWITTER_USERNAME` and the list id (found in the url) as `REACT_APP_TWITTER_LIST_ID`. This live twitter feed will be displayed on your investing summary page.


# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
