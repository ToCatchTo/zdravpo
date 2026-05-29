import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PaymentMethods from './pages/paymentMethods';
import UniversalInfoPage from './pages/universalInfoPage';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentMethods" element={<PaymentMethods />} />
          <Route path="/universalInfoPage" element={<UniversalInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
