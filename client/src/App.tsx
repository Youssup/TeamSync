// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './pages/test'
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App