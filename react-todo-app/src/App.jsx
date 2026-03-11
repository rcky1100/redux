import React from "react";
import store from "./store/store";
import StoreContext from "./contexts/storeContext";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
