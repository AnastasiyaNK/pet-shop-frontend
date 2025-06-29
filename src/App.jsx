import Layout from "./componets/Layout/Layout"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage/AllSalesPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";


function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/sales" element={<AllSalesPage />} />
          <Route path="/shopping" element={<ShoppingCart />} />
          <Route path="/products/:productId" element={<ShoppingCart />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App
