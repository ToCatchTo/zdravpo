import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PaymentMethods from './pages/paymentMethods';
import UniversalInfoPage from './pages/universalInfoPage';
import Counseling from './pages/counseling';
import UniversalInfoSubpage from './pages/universalInfoSubpage';
import Contact from './pages/contact';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentMethods" element={<PaymentMethods />} />
          <Route path="/universalInfoPage" element={<UniversalInfoPage />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/universalInfoSubpage" element={<UniversalInfoSubpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
