import { Routes, Route } from "react-router-dom";
import NtfPreviewCard from './pages/nft-preview-card-component-main/Ntf_preview_card';
import ProductListWithCard from "./pages/product-list-with-cart-main/ProductListWithCard";
import Home from './pages/Home';

function App() {
  return (
      <div>
          <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path="/ntf-preview-card" element={<NtfPreviewCard />} />
              <Route path="/product-list-with-card" element={<ProductListWithCard />} />
          </Routes>
      </div>
  );
}

export default App;
