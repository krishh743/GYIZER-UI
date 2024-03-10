import React from "react";
import "./App.css";
import AppLayout from "./components/layout/Layout";
import TodoForm from "./pages/TodoForm";
import TaskCards from "./pages/TaskCards";



function App() {
  return (
    <div className="App">
      <AppLayout>
        <TodoForm />
      </AppLayout>
    </div>
  );
}

export default App;
