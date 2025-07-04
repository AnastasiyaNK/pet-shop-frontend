import Layout from "./componets/Layout/Layout"
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage/AllSalesPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { ROUTES } from "./utils/routes";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryProduct from "./componets/CategoryProduct/CategoryProduct";


function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
          <Route path={`${ROUTES.CATEGORIES}/:categoryId`} element={<CategoryProduct />} />
          <Route path={ROUTES.PRODUCTS} element={<AllProductsPage />} />
          <Route path={ROUTES.SALES} element={<AllSalesPage />} />
          <Route path={ROUTES.SHOPPING} element={<ShoppingCart />} />
          <Route
            path={`${ROUTES.PRODUCTS}/:productId`}
            element={<ShoppingCart />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App
