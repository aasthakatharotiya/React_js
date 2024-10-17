import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todoKey',
    initialState: { student: JSON.parse(localStorage.getItem('studentData')) || [] },
    reducers: {
        addData: (state, action) => {
            state.student.push(action.payload)
            localStorage.setItem('studentData', JSON.stringify(state.student))
        },
        deleteData: (state, action) => {
            state.student = state.student.filter(item => item.id !== action.payload)
            localStorage.setItem('studentData', JSON.stringify(state.student))
        },
        updateData: (state, action) => {
            const index = state.student.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.student[index] = action.payload
                localStorage.setItem('studentData', JSON.stringify(state.student))
            }
        }
    }
})

export const { addData, deleteData, updateData } = todoSlice.actions
export default todoSlice.reducer




// import { createSlice } from "@reduxjs/toolkit";

// export const todo = createSlice({
//     name: "todo",
//     initialState: { student: []},
//     reducers: {
//         addData: (state, action) => {
//             state.student.push(action.payload)
//         },
//         deleteData: (state, action) => {
//             let data = state.student.filter((item) => item.id != action.payload)
//             state.student = data
//         },
//         updateData: (state, action) => {
//             state.student.map((e, i) => {
//                 if(e.id == action.payload.id){
//                     e.firstname = action.payload.firstname
//                     e.lastname = action.payload.lastname
//                     e.email = action.payload.email
//                     e.grid = action.payload.grid
//                     e.subject = action.payload.subject

//                     e.priority = action.payload.priority
//                     e.salary = action.payload.salary
//                     e.experience = action.payload.experience
//                     e.job = action.payload.job
//                 }
//                 else{
//                     e
//                 }
//             })
//         }
//     }
// })

// export const { addData, deleteData, updateData } = todo.actions
// export default todo.reducer
