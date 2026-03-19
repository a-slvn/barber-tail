import { Route, Routes } from 'react-router-dom';
import BarberHome from './pages/BarberHome';
import Landing from './pages/Landing';
import BlockPreview from './pages/BlockPreview';
import CategoryBlocks from './pages/CategoryBlocks';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<BarberHome />} />
      <Route path="/demo" element={<Home />} />
      <Route path="/category/:category" element={<CategoryBlocks />} />
      <Route
        path="/preview/:category/:subcategory/:name"
        element={<BlockPreview />}
      />
    </Routes>
  );
}

export default App;
