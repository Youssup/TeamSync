// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './pages/test'
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App