import React from "react";
import { useLaunch } from "@tarojs/taro";
import { Provider } from "mobx-react";
import stores from "./store";
import "./app.scss";

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLaunch(() => {
    if (typeof wx !== "undefined" && !wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else if (typeof wx !== "undefined") {
      wx.cloud.init({
        env: "你的云环境ID", // 替换成你的云环境ID
        traceUser: true,
      });
    }
  });

  return <Provider {...stores}>{children}</Provider>;
};

export default App;
