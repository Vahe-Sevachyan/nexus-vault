// import "./App.css";

import CreateCategoryBtn from "./components/CreateCategoryBtn";
import SearchCategories from "./components/SearchCategories";
import { FilterAlphaBtn } from "./components/FilterAlphaBtn";
import { FilterDateBtn } from "./components/FilterDateBtn";
function App() {
  return (
    <div
      key="1"
      className="grid h-screen w-full lg:grid-cols-[280px_1fr] bg-blue-50 dark:bg-blue-900"
    >
      {/* <h1>Nexus Vault</h1> */}

      <div className="flex items-center h-20 px-6 border-b">
        <span className="font-semibold text-blue-800 dark:text-blue-100">
          Link Manager
        </span>
        <CreateCategoryBtn
          className="w-8 h-8 ml-auto text-white bg-gradient-to-r from-pink-400 to-purple-500"
          size="icon"
          variant="outline"
        ></CreateCategoryBtn>
        <div className="flex gap-2 px-4 py-2">
          <FilterDateBtn
            className="text-xs text-white bg-gradient-to-r from-green-400 to-blue-500"
            size="xs"
          />
          <FilterAlphaBtn
            className="text-xs bg-gradient-to-r from-purple-400 to-indigo-500"
            size="xs"
          />
        </div>
        <SearchCategories />
      </div>
    </div>
  );
}

export default App;
