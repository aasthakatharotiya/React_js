import { configureStore } from "@reduxjs/toolkit"
import Api from "../Feature/ApiSlice"

export const store = configureStore({
    reducer: {
        apiKey: Api
    }
})