import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Router>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path='/' element = {<ProtectedRoute Component={Home} />} />
    </Routes>
    </Router>
  )
}

export default Routers;