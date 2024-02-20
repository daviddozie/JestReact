import Hello from "./components/Hello/Hello";
import Counter from "./components/Counter/Counter";

function App() {

  return (
    <>
      <Hello/>
      <Counter initialCount={0}/>
    </>
  )
}

export default App
