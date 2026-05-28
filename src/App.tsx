import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PayMethods from './pages/PayMethods';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payMethods" element={<PayMethods />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
