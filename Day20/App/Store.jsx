import { configureStore } from "@reduxjs/toolkit"
import counter from "../Feature/CounterSlice"

export const store = configureStore({
    reducer: {
        counterKey: counter
    }
})
