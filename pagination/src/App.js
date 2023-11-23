import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod, i) => {
            return (
              <span key={i} className="product">
                <img className="img" src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
                <span>Price: Rs.{prod.price}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page === 1 ? 'hidden' : ''}
            onClick={() => handlePage(page - 1)}
          >
            ◀
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i+1 ? 'active' : ""}
                onClick={() => handlePage(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page === products.length / 10 ? 'hidden' : ''}
            onClick={() => handlePage(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
