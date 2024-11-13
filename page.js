import Greeting from './Greeting';
import App from './App';
import Counter from './Counter'
import ProductList from './ProductList';

export default function Home() {
  return(
    <div>
      <Greeting name='Manuel'/>
      <br/>
      <App />
      <br/>
      <Counter />
      <ProductList />
      <br/>
    </div>
  );
}
