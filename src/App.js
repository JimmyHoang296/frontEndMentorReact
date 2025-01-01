import { Routes, Route } from "react-router-dom";
import NtfPreviewCard from './pages/nft-preview-card-component-main/Ntf_preview_card';
import ProductListWithCart from "./pages/product-list-with-cart-main/ProductListWithCart";
import Home from './pages/Home';
import AgeCalculator from "./pages/age-calculator-app-main/AgeCalculator";
import MortgageCalculator from "./pages/mortgage-repayment-calculator-main/MortgageCalculator";
import NotificationPage from "./pages/notifications-page-main/NotificationPage";

function App() {
  return (
      <div>
          <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path="/ntf-preview-card" element={<NtfPreviewCard />} />
              <Route path="/product-list-with-cart" element={<ProductListWithCart />} />
              <Route path="/age-calculator" element={<AgeCalculator />} />
              <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
              <Route path="/notifications-page" element={<NotificationPage /> } />
          </Routes>
      </div>
  );
}

export default App;
