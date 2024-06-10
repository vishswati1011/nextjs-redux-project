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
const Slice = createSlice({
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
    }
});

export const {addUser,removeUser} = Slice.actions
export default Slice.reducer