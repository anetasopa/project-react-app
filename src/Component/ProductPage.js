
import { useState, useEffect } from 'react';
import { fetchProducts } from '../Utils/fetchPoducts';
import { ProductItem } from './ProductItem';

export  function ProductPage() {
  const [products, setProducts] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  }

  const filterProducts = (product) => {
    const productName = product.name.toLowerCase();
    console.log(productName)
    return productName.includes(search.toLowerCase());
  }

  useEffect(() => {
    const fetchData = async () => {
      const _products = await fetchProducts();
      setProducts(_products);
    }

    fetchData();
  }, []);
   
  return (
    <div className="page">
      <input 
        onChange={handleSearch}
        className="input mb-5" 
        type="text" 
        style={{width: "200px"}}
        placeholder="Filter by title">
      </input>
      <div className="columns is-multiline">
        {products
            .filter(filterProducts)
            .map((product) => 
              <div 
                className="column is-4"
                key={product.image}
              >
                <ProductItem 
                  product={product}
                />
              </div>
          )}
      </div>
    </div>
  )
}