const { createSlice ,nanoid, createAsyncThunk} = require("@reduxjs/toolkit");

const initialState = {
    users:[],
    userAPIData:[],
    isLoading:'idle'
}

export const fetchApiUser = createAsyncThunk("fetchApiUsers",async () =>{
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json();
})

export const createUser = createAsyncThunk("users/createUser", async (user) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return response.json();
});


const userSlice = createSlice({
    name : 'addUserSlice',
    initialState,
    reducers : {
        addUser : (state,action) => {
            const data = {
                id : nanoid(),
                name : action.payload.name
            }
            state.users.push(data);
        },
        removeUser : (state,action) => {
            state.users = state.users.filter((user) => user.id !== action.payload.id)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApiUser.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.userAPIData= action.payload
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        });
    }
});

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer