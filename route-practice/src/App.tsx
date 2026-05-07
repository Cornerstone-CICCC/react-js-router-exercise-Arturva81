import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ProductsLayout from './pages/products/ProductsLayout';
import ProductsList from './pages/products/ProductsList';
import ProductDetail from './pages/products/ProductDetail';
import NotFound from './pages/NotFound';

const navLink = ({ isActive }: { isActive: boolean }) =>
  `font-medium hover:underline ${isActive ? 'underline' : ''}`;

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="border-b border-gray-200 px-8 py-4 flex gap-8">
        <NavLink to="/" className={navLink}>Home</NavLink>
        <NavLink to="/about" className={navLink}>About</NavLink>
        <NavLink to="/contact-us" className={navLink}>Contact Us</NavLink>
        <NavLink to="/products" className={navLink}>Products</NavLink>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
