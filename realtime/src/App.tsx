import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountDownPage from './pages/CountDownPage'
import ToxicWordDetection from './pages/ToxicWordDetection'
import MobileNet from './pages/MobileNet'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountDownPage />} />
          <Route path='/ToxicWordDectection' element={<ToxicWordDetection />} />
          <Route path='*' element={<h1>Not Found</h1>} /> {/* 404 */}
          <Route path='/MobileNet' element={<MobileNet />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
