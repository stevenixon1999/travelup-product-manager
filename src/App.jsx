import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ProductList from "./components/products/ProductList";


function App() {
  return (
    <>
          <main className="main">
            <Header />
            <Banner />
            <ProductList />
          </main>
          <Footer />
    </>
  );
}

export default App;