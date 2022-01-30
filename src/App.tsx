import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";
import { CounterHook } from "./components/CounterHook";
import './App.css';
import { CounterReducer } from "./counter-reducer/CounterReducer";

function App() {
  return (
    <div className='app'>
        <Counter />
        <CounterBy />
        <CounterEffect />
        <CounterHook />
        <CounterReducer />
    </div>
  );
}

export default App;
