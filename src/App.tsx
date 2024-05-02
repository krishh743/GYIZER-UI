import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import SignUp from "./pages/auth/Signup";
import TodoForm from "./pages/TodoForm";
import Practice from "./components/Practice";
import TheameDark from "./components/ThemeProvider";

function App() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((pre) => pre + 1);
  }, [setCount]);

  const result = useMemo(() => {
    console.log("Calculating...");
    // Example calculation, just squaring the count
    return count + 1;
  }, [count]);

  return (
    <div className="App">
      <Practice onClick={increase} />
      <p>count : {count}</p>
      <p>Result: {result}</p>
      <TheameDark />
    </div>
  );
}

export default App;
