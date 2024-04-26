import React from "react";
import "./App.css";
import SignUp from "./pages/auth/Signup";
import TodoForm from "./pages/TodoForm";


function App() {
  return (
    <div className="App">
      
      <SignUp/>
      <TodoForm/>
    </div>
  );
}

export default App;
