import React from "react";
import MainView from "./components/mainView";
import Navbar from "./components/navbar";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <MainView />
      </div>
    </Provider>
  );
}

export default App;
