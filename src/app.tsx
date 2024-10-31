import React from "react";
import { Provider } from "mobx-react";
import stores from "./store";
import "./app.scss";

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider {...stores}>{children}</Provider>;
};

export default App;
