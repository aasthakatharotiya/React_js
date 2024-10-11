import { configureStore } from "@reduxjs/toolkit"
import counter from "../Feature/CounterSlice"
import todo from "../Feature/TodoSlice"

export const store = configureStore({
    reducer: {
        counterKey: counter,
        todoKey: todo
    }
})
