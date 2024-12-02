import React from 'react'
import { Provider } from 'react-redux'
import ReduxAPI from './Redux/ReduxAPI'
import { store } from './App/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mens from './Redux/Mens'
import Women from './Redux/Women'
import Gift from './Redux/Gift'
import Food from './Redux/Food'
import Beauty from './Redux/Beauty'
import Electronic from './Redux/Electronic'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ReduxAPI />}></Route>
            <Route path='/Mens' element={<Mens />}></Route>
            <Route path='/Womens' element={<Women />}></Route>
            <Route path='/Food' element={<Food />}></Route>
            <Route path='/Beauty' element={<Beauty />}></Route>
            <Route path='/Gift' element={<Gift />}></Route>
            <Route path='/Electronic' element={<Electronic />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
