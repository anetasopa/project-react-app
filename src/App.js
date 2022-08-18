import { ProductPage } from './Component/ProductPage';
import { Navabar } from './Component/Navbar';
import './index.css';

export default function App() {
  return (
    <div className="container">
      <Navabar />
      <ProductPage />
    </div>
  )
}