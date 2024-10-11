import { createSlice } from "@reduxjs/toolkit"

export const todo = createSlice({
    name: "todo",
    initialState: { student: []},
    reducers: {
        addData: (state, action) => {
            state.student.push(action.payload)
        },
        deleteData: (state, action) => {
            let data = state.student.filter((item) => item.id != action.payload)
            state.student = data
        }
    }
})

export const { addData, deleteData } = todo.actions
export default todo.reducer