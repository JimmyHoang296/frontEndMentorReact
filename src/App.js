import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NtfPreviewCard from './pages/nft-preview-card-component-main/Ntf_preview_card';
import Home from './pages/Home';
function App() {
  return (
      <div className="container">
          <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path="/ntf-preview-card" element={<NtfPreviewCard />} />
          </Routes>
      </div>
  );
}

export default App;
