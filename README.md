# Step 1:  to run project 
npm run dev

# Step 2:  install rtk package

npm i @reduxjs/toolkit react-redux

# Step 3: create  redux folder
# Step 4: create store.js in redux folder

store.js

const { configureStore } = require("@reduxjs/toolkit");

export const store= configureStore({
    reducer : {}
});


# Step 5: create Provider and import in into layout.js
1. create provider file 
2. import store into provider and
3. import provider into layout.js

provider.js 

"use client";
import { store } from './store';
const {Provider} = require('react-redux');

export function Providers({children}){
    return <Provider store={store}>{children}</Provider>
}

# Step 6: create two component addUser and dispalyUser in app/component folder
# Step 7: What is slice 
A slice is a collection of Redux reducer logic and actions for a signle feature in your app
Example

action and reducer commanly called as slice but action and reducer must be of same feture 
like action if user authentication and reducer also of user authentication


In slice we defined action and reducer in single file
action is the data which we store in redux
reducer help us to store that data into redux


