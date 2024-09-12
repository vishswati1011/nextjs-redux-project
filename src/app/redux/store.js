const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './userSlice';
import todoReducer from './todoSlice';
export const store= configureStore({
    reducer :{
        usersData : userReducer,
        todosData : todoReducer
    },
});
