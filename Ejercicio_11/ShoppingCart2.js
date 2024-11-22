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

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  //USANDO USESTATE
  function handleDecreaseClick(productId) {
    const newProducts = products.map(product => {
      if(product.id === productId){
        return {...product, count: product.count - 1};
      }
      else{
        return product;
      }
    });
    setProducts(newProducts.filter(p => p.count >= 1));
  }

  /*
  USANDO IMMER
  function handleDecreaseClick(productId) {
    setProducts(draft => {
      const product = draft.find(p => p.id === productId);
      if(product.count > 1){
        product.count--;
      }
      else{
        draft.splice(productId,1);
      }
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
          <button onClick={() => handleDecreaseClick(product.id)}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
