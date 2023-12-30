// import "./App.css";

import AddCategoryBtn from "./components/AddCategoryBtn";

function App() {
  return (
    <div className="m-container bg-slate-300">
      <h1>Nexus Vault</h1>
      <div className="category-container">
        <span>Link Manager</span>
        <AddCategoryBtn />
      </div>
    </div>
  );
}

export default App;
