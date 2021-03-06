// this file will be our rootReducer

// this import will let us combine reducers into 1 rootReducer so all the data is in 1 place for easier access by React components
import { combineReducers } from "redux";

// import our alert reducer. If you don't it won't show up in the "State" tab of the Redux tab of the Chrome browser
import alert from "./alert";
// import our auth reducer. If you don't it won't show up in the "State" tab of the Redux tab of the Chrome browser
import auth from "./auth";

import profile from "./profile";

import post from "./post";

// this will contain all the reducers you make (and also import into this file), whenever you make a new reducer (like one for auth.js for example) make sure you pass it in here
export default combineReducers({ alert, auth, profile, post });

// now if you go into your Chrome browser, open up the console and click on Redux, the store will be setup
