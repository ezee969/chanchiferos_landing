import { useContext } from 'react';
import { ThemeContext } from 'context/theme';
import { Routes, Route, useMatch } from 'react-router-dom';
import { Header, Home, Footer, Product, Products, Register } from 'views';
import { products } from 'utils/files/products';

function App() {
  const BASE_URL = '/chanchiferos_landing';
  const { theme } = useContext(ThemeContext);
  const match = useMatch(`${BASE_URL}/products/:id`);
  const product = match
    ? products.find((product) => product.id === Number(match.params.id))
    : null;

  return (
    <div className={`${theme} flex flex-col items-center bg-transparent`}>
      <Header />
      <Routes>
        <Route path={BASE_URL} element={<Home />} />
        <Route path={`${BASE_URL}/products`} element={<Products />} />
        <Route
          path={`${BASE_URL}/products/:id`}
          element={<Product product={product} />}
        />
        <Route path={`${BASE_URL}/register`} element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
