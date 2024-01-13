import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountDownPage from './pages/CountDownPage'
import ToxicWordDetection from './pages/ToxicWordDetection'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountDownPage />} />
          <Route path='/ToxicWordDectection' element={<ToxicWordDetection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
