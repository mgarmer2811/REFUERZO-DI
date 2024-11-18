import Greeting from './Greeting';
import App from './App';
import Counter from './Counter';
import ProductList from './ProductList';
import Parent from './Parent';
import ToggleSwitch from './ToggleSwitch';
import ToDoList from './ToDoList';
import Counter2 from './Counter2';
import LoginControl from './LoginControl';

export default function Home() {
  return(
    <div>
      <Greeting name='Manuel'/>
      <App />
      <Counter />
      <ProductList />
      <Parent />
      <ToggleSwitch />
      <ToDoList />
      <Counter2 />
      <LoginControl />
    </div>
  );
}
