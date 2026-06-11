import { Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Design from '@/pages/Design';
import Development from '@/pages/Development';
import Marketing from '@/pages/Marketing';
import ITCyber from '@/pages/ITCyber';
import Consultancy from '@/pages/Consultancy';
import MedTech from '@/pages/MedTech';
import Pricing from '@/pages/Pricing';
import CustomPlan from '@/pages/CustomPlan';
import Course from '@/pages/Course';
import Contact from '@/pages/Contact';

function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/design" element={<Design />} />
            <Route path="/development" element={<Development />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/it-cyber" element={<ITCyber />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/medtech" element={<MedTech />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/custom-plan" element={<CustomPlan />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
