import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Privacy from './Privacy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}

export default App
