// import "./App.css";

import { PlusIcon } from "./components/PlusIcon";
import { CreateCategoryBtn } from "./components/CreateCategoryBtn";

function App() {
  return (
    <div>
      {/* <h1>Nexus Vault</h1> */}
      <div className="flex items-center h-20 px-6 border-b">
        <span className="font-semibold text-blue-800 dark:text-blue-100">
          Link Manager
        </span>
        <CreateCategoryBtn
          className="w-8 h-8 ml-auto text-white bg-gradient-to-r from-pink-400 to-purple-500"
          size="icon"
          variant="outline"
        >
          <PlusIcon className="w-6 h-4 " />
        </CreateCategoryBtn>
      </div>
    </div>
  );
}

export default App;
