const {createSlice, nanoid} = require("@reduxjs/toolkit");

const initialState = {
    todos : []
}
const Slice = createSlice ( {
    name :'todoSlice',
    initialState,
    reducers : {
        addTodo : (state,action) =>{
            const data = {
                id: nanoid(),
                name : action.payload.todo

            }
            state.todos.push(data);
        }
    }
})

export const {addTodo} = Slice.actions
export default Slice.reducer