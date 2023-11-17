import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import TableList from './pages/TableList'
import Blog from './pages/Blog'
import Movie from './pages/Movie'
import Not from './pages/Not'
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/tableList" element={<TableList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
