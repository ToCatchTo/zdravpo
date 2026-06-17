import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PaymentMethods from './pages/paymentMethods';
import UniversalInfoPage from './pages/universalInfoPage';
import Counseling from './pages/counseling';
import UniversalInfoSubpage from './pages/universalInfoSubpage';
import Contact from './pages/contact';
import CounselingDetailPage from './pages/counselingDetailPage';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platebni-metody" element={<PaymentMethods />} />
          <Route path="/kategorie/:slug" element={<UniversalInfoPage />} />
          <Route path="/poradna" element={<Counseling />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/podkategorie/:slug" element={<UniversalInfoSubpage />} />
          <Route path="/poradna/:slug" element={<CounselingDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
