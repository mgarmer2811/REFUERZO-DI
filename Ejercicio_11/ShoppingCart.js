import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Queso',
  count: 5,
}, {
  id: 2,
  name: 'Espaguetis',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  // USANDO STATE
  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if(product.id === productId){
        return { ...product, count: product.count + 1};
      }
      else{
        return product;
      }
    }));
  }

  /*
  USANDO IMMER
  function handleIncreaseClick(productId) {
    setProducts(draft => {
      const product = draft.find(p => p.id === productId);
      product.count++;
    });
  }
  */

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
