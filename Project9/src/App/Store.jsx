import { configureStore } from "@reduxjs/toolkit"
import todo from "../Feature/TodoSlice"

export const store = configureStore({
    reducer: {
        todoKey: todo
    }
})