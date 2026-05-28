import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PaymentMethods from './pages/paymentMethods';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentMethods" element={<PaymentMethods />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
