import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountDownPage from './pages/CountDownPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountDownPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
