import { Route, Routes } from 'react-router-dom';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
      <Routes>
       <Route path="/register" element={<Register/>} />
       <Route path='/' element = {<ProtectedRoute Component={Home} />} />
     </Routes>
  )
}

export default Routers;